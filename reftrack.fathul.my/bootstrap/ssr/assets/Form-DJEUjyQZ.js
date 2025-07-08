import { useSSRContext, mergeProps, unref, withCtx, renderSlot, createVNode, ref, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrGetDynamicModelProps, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { ShieldCheck, MapPin, Calendar, Users, GraduationCap, Briefcase, Home, Banknote, Building2, BookOpen, Code, Brain, Cloud, Info, Clock, Monitor, Package, CheckCircle, AlertTriangle, CircleIcon, Check } from "lucide-vue-next";
import { reactiveOmit, useVModel } from "@vueuse/core";
import { useForwardPropsEmits, RadioGroupRoot, useForwardProps, RadioGroupItem, RadioGroupIndicator, CheckboxRoot, CheckboxIndicator, Label } from "reka-ui";
import { c as cn, _ as _sfc_main$g } from "./index-BRQTVL0F.js";
import "clsx";
import "class-variance-authority";
import "tailwind-merge";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$f = {};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Banner.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white" }, _attrs))} data-v-1da9ed77><div class="absolute inset-0 opacity-10" data-v-1da9ed77><div class="absolute inset-0 bg-dot-pattern animate-pulse" data-v-1da9ed77></div></div><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" data-v-1da9ed77><div class="text-center" data-v-1da9ed77><div class="mb-8 animate-fade-in-up" data-v-1da9ed77><img src="https://cdn.fathul.my/assets/logo/ypadvancedskills-logo-whiteondark.svg" alt="YPAdvancedSkills Logo" class="h-16 mx-auto" data-v-1da9ed77></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200" data-v-1da9ed77><span class="block text-white" data-v-1da9ed77>Program</span><span class="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent animate-gradient-x" data-v-1da9ed77> Jaminan Kerjaya </span><span class="block text-white" data-v-1da9ed77>2025</span></h1></div></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramHeader.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ProgramHeader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1da9ed77"]]);
const _sfc_main$d = {
  __name: "KriteriaPemohon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Kriteria Pemohon </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Untuk memohon, anda perlu memenuhi syarat-syarat berikut: </p></div><ul class="space-y-4 max-w-2xl mx-auto text-left"><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(ShieldCheck), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Warganegara Malaysia</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Anak Pahang / pemastautin di Pahang. Pelajar atau ibu bapa dilahirkan atau sedang menetap di Pahang</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Berumur antara 18 hingga 35 tahun</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Users), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Terbuka kepada calon lelaki dan perempuan</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Mempunyai sekurang-kurangnya Diploma dalam mana-mana bidang</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Briefcase), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Sedang mencari pekerjaan atau ingin meningkatkan kemahiran</span></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/KriteriaPemohon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "ApaYangAndaPerolehi",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Apa Yang Anda Perolehi? </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Program ini menawarkan pelbagai faedah untuk memastikan kejayaan anda </p></div><div class="grid gap-8 md:grid-cols-3"><div class="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300"><div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">`);
      _push(ssrRenderComponent(unref(Home), { class: "w-8 h-8 text-white" }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3"> Penginapan &amp; Pengangkutan </h3><p class="text-gray-600 leading-relaxed"> Setiap perantis akan disediakan kemudahan pengangkutan dan penginapan secara percuma sepanjang tempoh latihan. </p></div><div class="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300"><div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">`);
      _push(ssrRenderComponent(unref(Banknote), { class: "w-8 h-8 text-white" }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3"> Pemberian Elaun </h3><p class="text-gray-600 leading-relaxed"> Setiap perantis yang menyertai kursus akan diberikan elaun Latihan sepanjang kursus. </p></div><div class="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300"><div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-8 h-8 text-white" }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3"> Penempatan Kerja </h3><p class="text-gray-600 leading-relaxed"> Setelah selesai menamatkan kursus, perantis akan ditawarkan tempat kerja mengikut posisi yang bersesuaian. </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ApaYangAndaPerolehi.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "ProgramYangDitawarkan",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Program Yang Ditawarkan &amp; Tempoh Program </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Kami kini menawarkan program-program berikut </p></div><div class="grid gap-8 lg:grid-cols-2"><div class="space-y-8"><div><h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "w-6 h-6 text-red-800 mr-3" }, null, _parent));
      _push(` Program Yang Tersedia </h3><div class="space-y-4"><div class="flex items-start p-4 border border-red-200 rounded-lg">`);
      _push(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-red-800 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700 font-medium">Python Basic Programming</span></div><div class="flex items-start p-4 border border-red-200 rounded-lg">`);
      _push(ssrRenderComponent(unref(Brain), { class: "w-5 h-5 text-red-800 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700 font-medium">GenAI Masterclass</span></div><div class="flex items-start p-4 border border-red-200 rounded-lg">`);
      _push(ssrRenderComponent(unref(Cloud), { class: "w-5 h-5 text-red-800 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700 font-medium">AWS Foundational Certificate</span></div></div><div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-yellow-600 mr-2" }, null, _parent));
      _push(`<p class="text-yellow-800 font-medium"> Kami akan mengumumkan tarikh yang disahkan dalam masa terdekat </p></div></div></div></div><div class="space-y-8"><div><h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-red-800 mr-3" }, null, _parent));
      _push(` Komitmen Yang Diperlukan </h3><div class="bg-red-50 border-l-4 border-red-800 p-6 rounded-r-lg mb-6"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-red-800 mr-2" }, null, _parent));
      _push(`<span class="text-red-900 font-semibold text-lg">1 Bulan</span></div></div><div class="space-y-4"><div class="border border-red-200 rounded-lg p-4"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-red-800 mr-2" }, null, _parent));
      _push(`<span class="font-semibold text-gray-900">Minggu 1–3: Kelas Fizikal</span></div><p class="text-gray-600 text-sm ml-7">Kehadiran sepenuh masa diperlukan</p></div><div class="border border-red-200 rounded-lg p-4"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(Monitor), { class: "w-5 h-5 text-red-800 mr-2" }, null, _parent));
      _push(`<span class="font-semibold text-gray-900">Minggu 4: Kelas Dalam Talian</span></div><p class="text-gray-600 text-sm ml-7">Kehadiran sepenuh masa diperlukan</p></div></div></div><div><h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Package), { class: "w-5 h-5 text-red-800 mr-2" }, null, _parent));
      _push(` Program Termasuk </h4><ul class="space-y-3"><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Latihan fizikal di YP Advanced Skills, Kuantan</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Modul pembelajaran dalam talian dan pensijilan</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Penilaian akhir, bimbingan, dan proses penempatan kerja</span></li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramYangDitawarkan.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "SiapaPatutMemohon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Siapa Patut Memohon? </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Program ini direka khas untuk </p></div><ul class="space-y-6 max-w-2xl mx-auto text-left mb-12"><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<div><h3 class="text-lg font-semibold text-gray-900 mb-1"> Graduan Baharu </h3><p class="text-gray-700"> Graduan baharu yang mencari pekerjaan dalam bidang teknologi/kejuruteraan atau hanya perlu meningkatkan kemahiran mereka </p></div></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Briefcase), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<div><h3 class="text-lg font-semibold text-gray-900 mb-1"> Graduan Yang Sudah Ada Tawaran Kerja </h3><p class="text-gray-700"> Graduan yang sudah mempunyai tawaran kerja tetapi memerlukan sokongan untuk memulakan dengan kukuh melalui <span class="font-semibold text-red-800">Pensijilan Industri dan Kesediaan Kerja</span></p></div></li></ul><div class="bg-red-50 border-l-4 border-red-800 p-6 rounded-r-lg"><div class="flex items-start">`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<div><h4 class="text-lg font-semibold text-red-800 mb-2"> Penyertaan Terhad! </h4><p class="text-red-700"> Jangan lepaskan peluang emas ini untuk menempah tempat anda dan dijemput ke taklimat program serta pemilihan calon kami. </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SiapaPatutMemohon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "RadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    orientation: { type: String, required: false },
    dir: { type: String, required: false },
    loop: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupRoot), mergeProps({
        "data-slot": "radio-group",
        class: unref(cn)("grid gap-3", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/radio-group/RadioGroup.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "RadioGroupItem",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    value: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupItem), mergeProps({ "data-slot": "radio-group-item" }, unref(forwardedProps), {
        class: unref(cn)(
          "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RadioGroupIndicator), {
              "data-slot": "radio-group-indicator",
              class: "relative flex items-center justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CircleIcon), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CircleIcon), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RadioGroupIndicator), {
                "data-slot": "radio-group-indicator",
                class: "relative flex items-center justify-center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CircleIcon), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/radio-group/RadioGroupItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: [Boolean, String], required: false },
    modelValue: { type: [Boolean, String, null], required: false },
    disabled: { type: Boolean, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ "data-slot": "checkbox" }, unref(forwarded), {
        class: unref(cn)(
          "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), {
              "data-slot": "checkbox-indicator",
              class: "flex items-center justify-center text-current transition-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(Check), { class: "size-3.5" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(Check), { class: "size-3.5" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), {
                "data-slot": "checkbox-indicator",
                class: "flex items-center justify-center text-current transition-none"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(Check), { class: "size-3.5" })
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Label), mergeProps({ "data-slot": "label" }, unref(delegatedProps), {
        class: unref(cn)(
          "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/label/Label.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: [String, Number], required: false },
    modelValue: { type: [String, Number], required: false },
    class: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        "data-slot": "input",
        class: unref(cn)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[1px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          props.class
        )
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input/Input.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card",
        class: unref(cn)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CardContent",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card-content",
        class: unref(cn)("px-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        "data-slot": "card-title",
        class: unref(cn)("leading-none font-semibold", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function useProgramForm() {
  const registrationReasons = ref([]);
  const form = useForm({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    registrationReasonsOther: "",
    commitmentLevel: "",
    commitmentLevelOther: "",
    programInterest: "",
    pahangConnection: "",
    pahangConnectionOther: ""
  });
  const updateRegistrationReasons = (value, checked) => {
    if (checked) {
      if (!registrationReasons.value.includes(value)) {
        registrationReasons.value.push(value);
      }
    } else {
      const index = registrationReasons.value.indexOf(value);
      if (index > -1) {
        registrationReasons.value.splice(index, 1);
      }
    }
  };
  const handleRegistrationReasonChange = (value, checked) => {
    updateRegistrationReasons(value, checked);
    if (value === "other" && !checked) {
      form.registrationReasonsOther = "";
    }
  };
  const isReasonSelected = (value) => {
    return registrationReasons.value.includes(value);
  };
  const submit = () => {
    form.transform((data) => ({
      ...data,
      registrationReasons: registrationReasons.value
    })).post(route("program.store"), {
      preserveScroll: true,
      onStart: () => {
      },
      onSuccess: () => {
      },
      onError: (errors) => {
      },
      onFinish: () => {
      }
    });
  };
  return {
    form,
    registrationReasons,
    updateRegistrationReasons,
    handleRegistrationReasonChange,
    isReasonSelected,
    processing: form.processing,
    submit
  };
}
const _sfc_main$1 = {
  __name: "ProgramForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { form, handleRegistrationReasonChange, isReasonSelected, processing } = useProgramForm();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background" }, _attrs))}>`);
      _push(ssrRenderComponent(ProgramHeader, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<div class="bg-card py-16 sm:py-20"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-sm font-bold text-card-foreground mb-4"> Borang Permohonan </h2><p class="text-sm text-muted-foreground max-w-2xl mx-auto"> Sila lengkapkan maklumat berikut untuk memohon program ini </p></div><form class="space-y-6"><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nama Penuh <span class="text-destructive"${_scopeId}>*</span>`);
          } else {
            return [
              createTextVNode(" Nama Penuh "),
              createVNode("span", { class: "text-destructive" }, "*")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        modelValue: unref(form).fullName,
        "onUpdate:modelValue": ($event) => unref(form).fullName = $event,
        type: "text",
        placeholder: "Masukkan nama penuh anda",
        class: "w-full"
      }, null, _parent));
      if (unref(form).errors.fullName) {
        _push(`<p class="text-sm text-destructive">${ssrInterpolate(unref(form).errors.fullName)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nombor Telefon <span class="text-destructive"${_scopeId}>*</span>`);
          } else {
            return [
              createTextVNode(" Nombor Telefon "),
              createVNode("span", { class: "text-destructive" }, "*")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        modelValue: unref(form).phoneNumber,
        "onUpdate:modelValue": ($event) => unref(form).phoneNumber = $event,
        type: "tel",
        placeholder: "Contoh: 012-3456789",
        class: "w-full"
      }, null, _parent));
      if (unref(form).errors.phoneNumber) {
        _push(`<p class="text-sm text-destructive">${ssrInterpolate(unref(form).errors.phoneNumber)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Alamat Emel <span class="text-destructive"${_scopeId}>*</span>`);
          } else {
            return [
              createTextVNode(" Alamat Emel "),
              createVNode("span", { class: "text-destructive" }, "*")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        placeholder: "contoh@email.com",
        class: "w-full"
      }, null, _parent));
      if (unref(form).errors.email) {
        _push(`<p class="text-sm text-destructive">${ssrInterpolate(unref(form).errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Umur <span class="text-destructive"${_scopeId}>*</span>`);
          } else {
            return [
              createTextVNode(" Umur "),
              createVNode("span", { class: "text-destructive" }, "*")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        modelValue: unref(form).age,
        "onUpdate:modelValue": ($event) => unref(form).age = $event,
        type: "number",
        placeholder: "Masukkan umur anda (18-35 tahun)",
        min: "18",
        max: "35",
        class: "w-full"
      }, null, _parent));
      if (unref(form).errors.age) {
        _push(`<p class="text-sm text-destructive">${ssrInterpolate(unref(form).errors.age)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Apakah sebab utama anda mendaftar? <span class="text-destructive"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode(" Apakah sebab utama anda mendaftar? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-5"${_scopeId2}><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    id: "upskill",
                    "model-value": unref(isReasonSelected)("upskill"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("upskill", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    for: "upskill",
                    class: "text-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Untuk meningkatkan kemahiran dan mempelajari sesuatu yang baru`);
                      } else {
                        return [
                          createTextVNode("Untuk meningkatkan kemahiran dan mempelajari sesuatu yang baru")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    id: "certificate",
                    "model-value": unref(isReasonSelected)("certificate"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("certificate", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    for: "certificate",
                    class: "text-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Untuk mendapatkan sijil yang diiktiraf`);
                      } else {
                        return [
                          createTextVNode("Untuk mendapatkan sijil yang diiktiraf")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    id: "job",
                    "model-value": unref(isReasonSelected)("job"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("job", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    for: "job",
                    class: "text-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Untuk meningkatkan peluang mendapat pekerjaan`);
                      } else {
                        return [
                          createTextVNode("Untuk meningkatkan peluang mendapat pekerjaan")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    id: "other-reason",
                    "model-value": unref(isReasonSelected)("other"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("other", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    for: "other-reason",
                    class: "text-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Lain-lain:`);
                      } else {
                        return [
                          createTextVNode("Lain-lain:")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(isReasonSelected)("other")) {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      modelValue: unref(form).registrationReasonsOther,
                      "onUpdate:modelValue": ($event) => unref(form).registrationReasonsOther = $event,
                      placeholder: "Sila nyatakan...",
                      class: "max-w-md"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (unref(isReasonSelected)("other") && unref(form).errors.registrationReasonsOther) {
                    _push3(`<div class="ml-6"${_scopeId2}><p class="text-sm text-destructive mt-1"${_scopeId2}>${ssrInterpolate(unref(form).errors.registrationReasonsOther)}</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (unref(form).errors.registrationReasons) {
                    _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.registrationReasons)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apakah sebab utama anda mendaftar? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$7), {
                            id: "upskill",
                            "model-value": unref(isReasonSelected)("upskill"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("upskill", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$6), {
                            for: "upskill",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Untuk meningkatkan kemahiran dan mempelajari sesuatu yang baru")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$7), {
                            id: "certificate",
                            "model-value": unref(isReasonSelected)("certificate"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("certificate", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$6), {
                            for: "certificate",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Untuk mendapatkan sijil yang diiktiraf")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$7), {
                            id: "job",
                            "model-value": unref(isReasonSelected)("job"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("job", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$6), {
                            for: "job",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Untuk meningkatkan peluang mendapat pekerjaan")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$7), {
                            id: "other-reason",
                            "model-value": unref(isReasonSelected)("other"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("other", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$6), {
                            for: "other-reason",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lain-lain:")
                            ]),
                            _: 1
                          }),
                          unref(isReasonSelected)("other") ? (openBlock(), createBlock(unref(_sfc_main$5), {
                            key: 0,
                            modelValue: unref(form).registrationReasonsOther,
                            "onUpdate:modelValue": ($event) => unref(form).registrationReasonsOther = $event,
                            placeholder: "Sila nyatakan...",
                            class: "max-w-md"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                        ]),
                        unref(isReasonSelected)("other") && unref(form).errors.registrationReasonsOther ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "ml-6"
                        }, [
                          createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.registrationReasonsOther), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      unref(form).errors.registrationReasons ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-destructive"
                      }, toDisplayString(unref(form).errors.registrationReasons), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Apakah sebab utama anda mendaftar? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(_sfc_main$7), {
                          id: "upskill",
                          "model-value": unref(isReasonSelected)("upskill"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("upskill", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$6), {
                          for: "upskill",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Untuk meningkatkan kemahiran dan mempelajari sesuatu yang baru")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(_sfc_main$7), {
                          id: "certificate",
                          "model-value": unref(isReasonSelected)("certificate"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("certificate", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$6), {
                          for: "certificate",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Untuk mendapatkan sijil yang diiktiraf")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(_sfc_main$7), {
                          id: "job",
                          "model-value": unref(isReasonSelected)("job"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("job", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$6), {
                          for: "job",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Untuk meningkatkan peluang mendapat pekerjaan")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(_sfc_main$7), {
                          id: "other-reason",
                          "model-value": unref(isReasonSelected)("other"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("other", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$6), {
                          for: "other-reason",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Lain-lain:")
                          ]),
                          _: 1
                        }),
                        unref(isReasonSelected)("other") ? (openBlock(), createBlock(unref(_sfc_main$5), {
                          key: 0,
                          modelValue: unref(form).registrationReasonsOther,
                          "onUpdate:modelValue": ($event) => unref(form).registrationReasonsOther = $event,
                          placeholder: "Sila nyatakan...",
                          class: "max-w-md"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                      ]),
                      unref(isReasonSelected)("other") && unref(form).errors.registrationReasonsOther ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "ml-6"
                      }, [
                        createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.registrationReasonsOther), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    unref(form).errors.registrationReasons ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-destructive"
                    }, toDisplayString(unref(form).errors.registrationReasons), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Adakah anda bersedia untuk komitmen kepada latihan 1 bulan ini? <span class="text-destructive"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode(" Adakah anda bersedia untuk komitmen kepada latihan 1 bulan ini? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
                    modelValue: unref(form).commitmentLevel,
                    "onUpdate:modelValue": ($event) => unref(form).commitmentLevel = $event,
                    class: "space-y-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "fully-committed",
                          value: "fully-committed"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "fully-committed",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ya, saya komitmen sepenuhnya`);
                            } else {
                              return [
                                createTextVNode("Ya, saya komitmen sepenuhnya")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "need-info",
                          value: "need-info"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "need-info",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Saya memerlukan maklumat lanjut sebelum membuat keputusan`);
                            } else {
                              return [
                                createTextVNode("Saya memerlukan maklumat lanjut sebelum membuat keputusan")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "not-sure",
                          value: "not-sure"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "not-sure",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tidak pasti`);
                            } else {
                              return [
                                createTextVNode("Tidak pasti")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "other-commitment",
                          value: "other-commitment"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "other-commitment",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lain-lain:`);
                            } else {
                              return [
                                createTextVNode("Lain-lain:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).commitmentLevel === "other-commitment") {
                          _push4(ssrRenderComponent(unref(_sfc_main$5), {
                            modelValue: unref(form).commitmentLevelOther,
                            "onUpdate:modelValue": ($event) => unref(form).commitmentLevelOther = $event,
                            placeholder: "Sila nyatakan...",
                            class: "max-w-md"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        if (unref(form).commitmentLevel === "other-commitment" && unref(form).errors.commitmentLevelOther) {
                          _push4(`<div class="ml-6"${_scopeId3}><p class="text-sm text-destructive mt-1"${_scopeId3}>${ssrInterpolate(unref(form).errors.commitmentLevelOther)}</p></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "fully-committed",
                              value: "fully-committed"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "fully-committed",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya, saya komitmen sepenuhnya")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "need-info",
                              value: "need-info"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "need-info",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya memerlukan maklumat lanjut sebelum membuat keputusan")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "not-sure",
                              value: "not-sure"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "not-sure",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tidak pasti")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "other-commitment",
                              value: "other-commitment"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "other-commitment",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).commitmentLevel === "other-commitment" ? (openBlock(), createBlock(unref(_sfc_main$5), {
                              key: 0,
                              modelValue: unref(form).commitmentLevelOther,
                              "onUpdate:modelValue": ($event) => unref(form).commitmentLevelOther = $event,
                              placeholder: "Sila nyatakan...",
                              class: "max-w-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          unref(form).commitmentLevel === "other-commitment" && unref(form).errors.commitmentLevelOther ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ml-6"
                          }, [
                            createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.commitmentLevelOther), 1)
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(form).errors.commitmentLevel) {
                    _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.commitmentLevel)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Adakah anda bersedia untuk komitmen kepada latihan 1 bulan ini? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$9), {
                        modelValue: unref(form).commitmentLevel,
                        "onUpdate:modelValue": ($event) => unref(form).commitmentLevel = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "fully-committed",
                              value: "fully-committed"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "fully-committed",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya, saya komitmen sepenuhnya")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "need-info",
                              value: "need-info"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "need-info",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya memerlukan maklumat lanjut sebelum membuat keputusan")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "not-sure",
                              value: "not-sure"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "not-sure",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tidak pasti")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "other-commitment",
                              value: "other-commitment"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "other-commitment",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).commitmentLevel === "other-commitment" ? (openBlock(), createBlock(unref(_sfc_main$5), {
                              key: 0,
                              modelValue: unref(form).commitmentLevelOther,
                              "onUpdate:modelValue": ($event) => unref(form).commitmentLevelOther = $event,
                              placeholder: "Sila nyatakan...",
                              class: "max-w-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          unref(form).commitmentLevel === "other-commitment" && unref(form).errors.commitmentLevelOther ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ml-6"
                          }, [
                            createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.commitmentLevelOther), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(form).errors.commitmentLevel ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-destructive"
                      }, toDisplayString(unref(form).errors.commitmentLevel), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Adakah anda bersedia untuk komitmen kepada latihan 1 bulan ini? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$9), {
                      modelValue: unref(form).commitmentLevel,
                      "onUpdate:modelValue": ($event) => unref(form).commitmentLevel = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "fully-committed",
                            value: "fully-committed"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "fully-committed",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ya, saya komitmen sepenuhnya")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "need-info",
                            value: "need-info"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "need-info",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Saya memerlukan maklumat lanjut sebelum membuat keputusan")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "not-sure",
                            value: "not-sure"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "not-sure",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tidak pasti")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "other-commitment",
                            value: "other-commitment"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "other-commitment",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lain-lain:")
                            ]),
                            _: 1
                          }),
                          unref(form).commitmentLevel === "other-commitment" ? (openBlock(), createBlock(unref(_sfc_main$5), {
                            key: 0,
                            modelValue: unref(form).commitmentLevelOther,
                            "onUpdate:modelValue": ($event) => unref(form).commitmentLevelOther = $event,
                            placeholder: "Sila nyatakan...",
                            class: "max-w-md"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                        ]),
                        unref(form).commitmentLevel === "other-commitment" && unref(form).errors.commitmentLevelOther ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "ml-6"
                        }, [
                          createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.commitmentLevelOther), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    unref(form).errors.commitmentLevel ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-destructive"
                    }, toDisplayString(unref(form).errors.commitmentLevel), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Apakah program yang anda minati? <span class="text-destructive"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode(" Apakah program yang anda minati? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
                    modelValue: unref(form).programInterest,
                    "onUpdate:modelValue": ($event) => unref(form).programInterest = $event,
                    class: "space-y-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "python-basic",
                          value: "python-basic"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "python-basic",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Python Basic Programming`);
                            } else {
                              return [
                                createTextVNode("Python Basic Programming")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "genai-masterclass",
                          value: "genai-masterclass"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "genai-masterclass",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`GenAI Masterclass`);
                            } else {
                              return [
                                createTextVNode("GenAI Masterclass")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "aws-foundational",
                          value: "aws-foundational"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "aws-foundational",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`AWS Foundational Certificate`);
                            } else {
                              return [
                                createTextVNode("AWS Foundational Certificate")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "more-than-one",
                          value: "more-than-one"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "more-than-one",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lebih daripada 1 program`);
                            } else {
                              return [
                                createTextVNode("Lebih daripada 1 program")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "python-basic",
                              value: "python-basic"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "python-basic",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Python Basic Programming")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "genai-masterclass",
                              value: "genai-masterclass"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "genai-masterclass",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("GenAI Masterclass")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "aws-foundational",
                              value: "aws-foundational"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "aws-foundational",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("AWS Foundational Certificate")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "more-than-one",
                              value: "more-than-one"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "more-than-one",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lebih daripada 1 program")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(form).errors.programInterest) {
                    _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.programInterest)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apakah program yang anda minati? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$9), {
                        modelValue: unref(form).programInterest,
                        "onUpdate:modelValue": ($event) => unref(form).programInterest = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "python-basic",
                              value: "python-basic"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "python-basic",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Python Basic Programming")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "genai-masterclass",
                              value: "genai-masterclass"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "genai-masterclass",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("GenAI Masterclass")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "aws-foundational",
                              value: "aws-foundational"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "aws-foundational",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("AWS Foundational Certificate")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "more-than-one",
                              value: "more-than-one"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "more-than-one",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lebih daripada 1 program")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(form).errors.programInterest ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-destructive"
                      }, toDisplayString(unref(form).errors.programInterest), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Apakah program yang anda minati? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$9), {
                      modelValue: unref(form).programInterest,
                      "onUpdate:modelValue": ($event) => unref(form).programInterest = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "python-basic",
                            value: "python-basic"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "python-basic",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Python Basic Programming")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "genai-masterclass",
                            value: "genai-masterclass"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "genai-masterclass",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("GenAI Masterclass")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "aws-foundational",
                            value: "aws-foundational"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "aws-foundational",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("AWS Foundational Certificate")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "more-than-one",
                            value: "more-than-one"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "more-than-one",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lebih daripada 1 program")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    unref(form).errors.programInterest ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-destructive"
                    }, toDisplayString(unref(form).errors.programInterest), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Apakah kaitan anda dengan negeri Pahang? <span class="text-destructive"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode(" Apakah kaitan anda dengan negeri Pahang? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
                    modelValue: unref(form).pahangConnection,
                    "onUpdate:modelValue": ($event) => unref(form).pahangConnection = $event,
                    class: "space-y-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "born-pahang",
                          value: "born-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "born-pahang",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Saya dilahirkan di Pahang`);
                            } else {
                              return [
                                createTextVNode("Saya dilahirkan di Pahang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "living-pahang",
                          value: "living-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "living-pahang",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Saya sedang menetap di Pahang`);
                            } else {
                              return [
                                createTextVNode("Saya sedang menetap di Pahang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "parents-pahang",
                          value: "parents-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "parents-pahang",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Kedua-dua ibu bapa saya berasal dari Pahang`);
                            } else {
                              return [
                                createTextVNode("Kedua-dua ibu bapa saya berasal dari Pahang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          id: "other-pahang",
                          value: "other-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), {
                          for: "other-pahang",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lain-lain:`);
                            } else {
                              return [
                                createTextVNode("Lain-lain:")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).pahangConnection === "other-pahang") {
                          _push4(ssrRenderComponent(unref(_sfc_main$5), {
                            modelValue: unref(form).pahangConnectionOther,
                            "onUpdate:modelValue": ($event) => unref(form).pahangConnectionOther = $event,
                            placeholder: "Sila nyatakan...",
                            class: "max-w-md"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        if (unref(form).pahangConnection === "other-pahang" && unref(form).errors.pahangConnectionOther) {
                          _push4(`<div class="ml-6"${_scopeId3}><p class="text-sm text-destructive mt-1"${_scopeId3}>${ssrInterpolate(unref(form).errors.pahangConnectionOther)}</p></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "born-pahang",
                              value: "born-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "born-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya dilahirkan di Pahang")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "living-pahang",
                              value: "living-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "living-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya sedang menetap di Pahang")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "parents-pahang",
                              value: "parents-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "parents-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kedua-dua ibu bapa saya berasal dari Pahang")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "other-pahang",
                              value: "other-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "other-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).pahangConnection === "other-pahang" ? (openBlock(), createBlock(unref(_sfc_main$5), {
                              key: 0,
                              modelValue: unref(form).pahangConnectionOther,
                              "onUpdate:modelValue": ($event) => unref(form).pahangConnectionOther = $event,
                              placeholder: "Sila nyatakan...",
                              class: "max-w-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          unref(form).pahangConnection === "other-pahang" && unref(form).errors.pahangConnectionOther ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ml-6"
                          }, [
                            createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.pahangConnectionOther), 1)
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(form).errors.pahangConnection) {
                    _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.pahangConnection)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apakah kaitan anda dengan negeri Pahang? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$9), {
                        modelValue: unref(form).pahangConnection,
                        "onUpdate:modelValue": ($event) => unref(form).pahangConnection = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "born-pahang",
                              value: "born-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "born-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya dilahirkan di Pahang")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "living-pahang",
                              value: "living-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "living-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya sedang menetap di Pahang")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "parents-pahang",
                              value: "parents-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "parents-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kedua-dua ibu bapa saya berasal dari Pahang")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$8), {
                              id: "other-pahang",
                              value: "other-pahang"
                            }),
                            createVNode(unref(_sfc_main$6), {
                              for: "other-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).pahangConnection === "other-pahang" ? (openBlock(), createBlock(unref(_sfc_main$5), {
                              key: 0,
                              modelValue: unref(form).pahangConnectionOther,
                              "onUpdate:modelValue": ($event) => unref(form).pahangConnectionOther = $event,
                              placeholder: "Sila nyatakan...",
                              class: "max-w-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          unref(form).pahangConnection === "other-pahang" && unref(form).errors.pahangConnectionOther ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ml-6"
                          }, [
                            createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.pahangConnectionOther), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(form).errors.pahangConnection ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-destructive"
                      }, toDisplayString(unref(form).errors.pahangConnection), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$2), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Apakah kaitan anda dengan negeri Pahang? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$9), {
                      modelValue: unref(form).pahangConnection,
                      "onUpdate:modelValue": ($event) => unref(form).pahangConnection = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "born-pahang",
                            value: "born-pahang"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "born-pahang",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Saya dilahirkan di Pahang")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "living-pahang",
                            value: "living-pahang"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "living-pahang",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Saya sedang menetap di Pahang")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "parents-pahang",
                            value: "parents-pahang"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "parents-pahang",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kedua-dua ibu bapa saya berasal dari Pahang")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$8), {
                            id: "other-pahang",
                            value: "other-pahang"
                          }),
                          createVNode(unref(_sfc_main$6), {
                            for: "other-pahang",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lain-lain:")
                            ]),
                            _: 1
                          }),
                          unref(form).pahangConnection === "other-pahang" ? (openBlock(), createBlock(unref(_sfc_main$5), {
                            key: 0,
                            modelValue: unref(form).pahangConnectionOther,
                            "onUpdate:modelValue": ($event) => unref(form).pahangConnectionOther = $event,
                            placeholder: "Sila nyatakan...",
                            class: "max-w-md"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                        ]),
                        unref(form).pahangConnection === "other-pahang" && unref(form).errors.pahangConnectionOther ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "ml-6"
                        }, [
                          createVNode("p", { class: "text-sm text-destructive mt-1" }, toDisplayString(unref(form).errors.pahangConnectionOther), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    unref(form).errors.pahangConnection ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-destructive"
                    }, toDisplayString(unref(form).errors.pahangConnection), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$g), {
                    type: "submit",
                    disabled: unref(processing),
                    class: "px-8 py-2 cursor-pointer hover:bg-opacity-90 transition-colors"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(processing) ? "Menghantar..." : "Hantar Permohonan")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(processing) ? "Menghantar..." : "Hantar Permohonan"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(unref(_sfc_main$g), {
                        type: "submit",
                        disabled: unref(processing),
                        class: "px-8 py-2 cursor-pointer hover:bg-opacity-90 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(processing) ? "Menghantar..." : "Hantar Permohonan"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(unref(_sfc_main$g), {
                      type: "submit",
                      disabled: unref(processing),
                      class: "px-8 py-2 cursor-pointer hover:bg-opacity-90 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(processing) ? "Menghantar..." : "Hantar Permohonan"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div>`);
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
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Program Jaminan Kerjaya - fathul.my" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
