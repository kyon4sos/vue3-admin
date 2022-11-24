import { useBreakpoints } from '@vueuse/core';

const useWidth = () => {
  const breakpoints = useBreakpoints({
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920,
  });

  const sm = breakpoints.smallerOrEqual('sm');
  const md = breakpoints.smallerOrEqual('md');
  const lg = breakpoints.smallerOrEqual('lg');
  const xl = breakpoints.smallerOrEqual('xl');
  return {
    lg,
    sm,
    md,
    xl,
    breakpoints,
  };
};

export default useWidth;
