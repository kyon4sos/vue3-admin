import { computed, defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app';
import { ElIcon, ElMenu, ElMenuItem, ElSubMenu, ElDrawer } from 'element-plus';
import { MenuTrigger, Icon } from '@/components';
import useWidth from '@/hooks/use-width';
import useEvent from '@/hooks/use-event';
import { RouteRecordRaw, useRouter } from 'vue-router';
import './menu.less';

export default defineComponent({
  setup() {
    const router = useRouter();
    const items = router.options.routes;
    const defaultActive = router.currentRoute.value.fullPath;
    const store = useAppStore();
    const drawer = ref(false);

    const showMenuHandler = () => {
      drawer.value = true;
    };
    useEvent([{ name: 'showMenu', handler: showMenuHandler }]);
    const { isCollapse } = storeToRefs(store);
    const { md } = useWidth();

    const collapsed = computed(() => {
      if (md.value) return false;
      return isCollapse.value;
    });

    const render = (menus: readonly RouteRecordRaw[], path?: string) => {
      return menus.map((menu) => {
        const { children, meta } = menu;
        const { title, icon, hidden } = meta ?? {};
        if (hidden || !title) {
          return null;
        }
        if (children && children.length) {
          return (
            <ElSubMenu
              index={menu.path}
              v-slots={{
                title: () => (
                  <>
                    {icon ? <Icon type={icon} /> : null}
                    <span>{title}</span>
                  </>
                ),
              }}
            >
              {render(children, menu.path)}
            </ElSubMenu>
          );
        }
        const index = path ? `${path}/${menu.path}` : menu.path;
        return (
          <ElMenuItem index={index}>
            {icon ? <ElIcon>{<icon />}</ElIcon> : null}
            <span>{title}</span>
          </ElMenuItem>
        );
      });
    };

    const renderMenu = () => {
      return (
        <div class={{ menu: true, collapsed: isCollapse.value }}>
          <ElMenu
            collapseTransition={false}
            defaultActive={defaultActive}
            collapse={collapsed.value}
            router
          >
            {render(items)}
          </ElMenu>
          {md.value ? null : <MenuTrigger />}
        </div>
      );
    };
    const handleClose = () => {
      drawer.value = false;
    };

    return () => (
      <div class="menu-wrap">
        {md.value ? (
          <ElDrawer
            size={240}
            modelValue={drawer.value}
            direction="ltr"
            onClose={handleClose}
          >
            {renderMenu()}
          </ElDrawer>
        ) : (
          renderMenu()
        )}
      </div>
    );
  },
});
