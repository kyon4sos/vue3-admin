import mitt from 'mitt';
import { onMounted, onUnmounted } from 'vue';

const emitter = mitt();

type EventKey = keyof typeof EventKey;

type Event = {
  name: EventKey;
  handler: () => void;
};

const EventKey = {
  showMenu: 'showMenu',
};

const useEvent = (event?: Event[]) => {
  onMounted(() => {
    event?.forEach((e) => {
      emitter.on(e.name, e.handler);
    });
  });
  onUnmounted(() => {
    event?.forEach((e) => {
      emitter.off(e.name, e.handler);
    });
  });
  const emit = (e: EventKey) => emitter.emit(e);
  return {
    emit,
  };
};

export default useEvent;
