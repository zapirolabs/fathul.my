import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex h-10 w-full items-center justify-center gap-2 md:gap-4 bg-black/90 text-white font-sans animate-gradient-move",
    style: { "background": "linear-gradient(90deg, #2e3191 0%, #00a551 25%, #2e3191 50%, #00a551 75%, #2e3191 100%), url('https://central.cdn.siza.my/public/zakat2u-v5/assets/images/header-noise.png')", "background-blend-mode": "overlay", "background-repeat": "repeat", "background-size": "200% 100%, 24px 24px" }
  }, _attrs))}><p class="font-extrabold text-base leading-[1.4] tracking-[0.01em] flex items-center gap-1">Zakat2U<span class="opacity-60 font-extrabold ml-1">v5</span></p><a href="/" class="inline-flex items-center justify-center rounded-full bg-white text-black font-extrabold px-3 text-[0.85rem] leading-[1.1] h-6">2026</a></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white" }, _attrs))} data-v-ac8d0df3><div class="absolute inset-0 opacity-10" data-v-ac8d0df3><div class="absolute inset-0 bg-dot-pattern animate-pulse" data-v-ac8d0df3></div></div><div class="absolute inset-0 overflow-hidden" data-v-ac8d0df3><div class="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float-slow" data-v-ac8d0df3></div><div class="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-lg rotate-45 animate-float-medium" data-v-ac8d0df3></div><div class="absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float-fast" data-v-ac8d0df3></div><div class="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-lg animate-float-slow" data-v-ac8d0df3></div></div><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" data-v-ac8d0df3><div class="text-center" data-v-ac8d0df3><div class="mb-8 animate-fade-in-up" data-v-ac8d0df3><img src="https://cdn.fathul.my/assets/logo/ypadvancedskills-logo-whiteondark.svg" alt="YPAdvancedSkills Logo" class="h-16 mx-auto" data-v-ac8d0df3></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200" data-v-ac8d0df3><span class="block text-white" data-v-ac8d0df3>Program</span><span class="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent animate-gradient-x" data-v-ac8d0df3> Jaminan Kerjaya </span><span class="block text-white" data-v-ac8d0df3>2025</span></h1><div class="animate-fade-in-up animation-delay-400" data-v-ac8d0df3><div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-red-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow" data-v-ac8d0df3><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ac8d0df3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-ac8d0df3></path></svg> Mulakan Perjalanan Kerjaya Anda </div></div></div></div><div class="absolute bottom-0 left-0 right-0" data-v-ac8d0df3><svg class="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none" data-v-ac8d0df3><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" data-v-ac8d0df3></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" data-v-ac8d0df3></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" data-v-ac8d0df3></path></svg></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProgramHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ac8d0df3"]]);
const _sfc_main$1 = {
  __name: "ProgramForm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(ProgramHeader, null, null, _parent));
      _push(`<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="text-center"><p class="text-gray-600 text-lg"> Form content will be added here in the next phase... </p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Program Jaminan Kerjaya - fathul.my" }, null, _parent));
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
