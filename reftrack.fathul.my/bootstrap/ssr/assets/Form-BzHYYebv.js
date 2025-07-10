import { useSSRContext, mergeProps, unref, ref, onMounted, computed, withCtx, renderSlot, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrGetDynamicModelProps, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { ShieldCheck, MapPin, Calendar, Users, GraduationCap, Briefcase, Home, Banknote, Building2, BookOpen, Info, Clock, Package, CheckCircle, AlertTriangle, CircleIcon, Check, ChevronDown } from "lucide-vue-next";
import { reactiveOmit, useVModel } from "@vueuse/core";
import { useForwardPropsEmits, RadioGroupRoot, useForwardProps, RadioGroupItem, RadioGroupIndicator, CheckboxRoot, CheckboxIndicator, Label, AccordionRoot, AccordionContent, AccordionItem, AccordionHeader, AccordionTrigger } from "reka-ui";
import { c as cn, _ as _sfc_main$m } from "./index-CBusBGn5.js";
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
const _sfc_main$l = {};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Banner.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white" }, _attrs))} data-v-c7164035><div class="absolute inset-0 opacity-10" data-v-c7164035><div class="absolute inset-0 bg-dot-pattern animate-pulse" data-v-c7164035></div></div><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" data-v-c7164035><div class="text-center" data-v-c7164035><div class="mb-8 animate-fade-in-up" data-v-c7164035><img src="https://cdn.fathul.my/assets/logo/ypadvancedskills-logo-whiteondark.svg" alt="YPAdvancedSkills Logo" class="h-16 mx-auto" data-v-c7164035></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 animate-fade-in-up animation-delay-200" data-v-c7164035><span class="block text-white" data-v-c7164035>Program</span><span class="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent animate-gradient-x" data-v-c7164035> Jaminan Kerjaya </span><span class="block text-white" data-v-c7164035>2025</span></h1></div></div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramHeader.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const ProgramHeader = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c7164035"]]);
const _sfc_main$j = {
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
      _push(`<span class="text-gray-700">Berumur antara 20 hingga 35 tahun</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Users), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Terbuka kepada calon lelaki dan perempuan</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Mempunyai sekurang-kurangnya Diploma dalam mana-mana bidang</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Briefcase), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<span class="text-gray-700">Sedang mencari pekerjaan atau ingin meningkatkan kemahiran</span></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/KriteriaPemohon.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ApaYangAndaPerolehi.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
function updateTheme(value) {
  if (typeof window === "undefined") {
    return;
  }
  if (value === "system") {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = mediaQueryList.matches ? "dark" : "light";
    document.documentElement.classList.toggle("dark", systemTheme === "dark");
  } else {
    document.documentElement.classList.toggle("dark", value === "dark");
  }
}
const setCookie = (name, value, days = 365) => {
  if (typeof document === "undefined") {
    return;
  }
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};
function useAppearance() {
  const appearance = ref("system");
  onMounted(() => {
    const savedAppearance = localStorage.getItem("appearance");
    if (savedAppearance) {
      appearance.value = savedAppearance;
    }
  });
  function updateAppearance(value) {
    appearance.value = value;
    localStorage.setItem("appearance", value);
    setCookie("appearance", value);
    updateTheme(value);
  }
  const awsLogoUrl = computed(() => {
    if (typeof window === "undefined") {
      return "https://cdn.fathul.my/assets/logo/aws-logo-fullcolor.svg";
    }
    const isDark = appearance.value === "dark" || appearance.value === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? "https://cdn.fathul.my/assets/logo/aws-logo-whiteondark.svg" : "https://cdn.fathul.my/assets/logo/aws-logo-fullcolor.svg";
  });
  const chatGptLogoUrl = computed(() => {
    if (typeof window === "undefined") {
      return "https://cdn.fathul.my/assets/logo/chatgpt-logo-black.svg";
    }
    const isDark = appearance.value === "dark" || appearance.value === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? "https://cdn.fathul.my/assets/logo/chatgpt-logo-whiteondark.svg" : "https://cdn.fathul.my/assets/logo/chatgpt-logo-black.svg";
  });
  const pythonLogoUrl = computed(() => {
    if (typeof window === "undefined") {
      return "https://cdn.fathul.my/assets/logo/python-logo-fullcolor.svg";
    }
    const isDark = appearance.value === "dark" || appearance.value === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? "https://cdn.fathul.my/assets/logo/python-logo-fullcolor.svg" : "https://cdn.fathul.my/assets/logo/python-logo-fullcolor.svg";
  });
  return {
    appearance,
    updateAppearance,
    awsLogoUrl,
    chatGptLogoUrl,
    pythonLogoUrl
  };
}
const _sfc_main$h = {
  __name: "ProgramYangDitawarkan",
  __ssrInlineRender: true,
  setup(__props) {
    const { awsLogoUrl, chatGptLogoUrl, pythonLogoUrl } = useAppearance();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Program Yang Ditawarkan </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Pilih program yang sesuai dengan matlamat kerjaya anda </p></div><div class="grid gap-12 lg:grid-cols-2"><div><div class="mb-8"><h3 class="text-2xl font-semibold text-gray-900 mb-2 flex items-center">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "w-6 h-6 text-[#941e20] mr-3" }, null, _parent));
      _push(` Program Tersedia </h3><p class="text-gray-600 text-sm">Semua program adalah intensif selama 4 minggu</p></div><div class="space-y-6"><div class="group hover:bg-gray-50 transition-colors duration-200 p-6 rounded-lg border border-gray-200"><div class="flex items-start"><div class="flex-shrink-0 mr-4"><img${ssrRenderAttr("src", unref(pythonLogoUrl))} alt="Python Logo" class="w-10 h-8"></div><div class="flex-1"><h4 class="text-lg font-semibold text-gray-900 mb-2">Python Basic Programming</h4><p class="text-gray-600 text-sm mb-3"> Pelajari asas pengaturcaraan Python, automasi, dan pembangunan API </p><div class="flex items-center text-sm text-[#941e20] font-medium">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 mr-1" }, null, _parent));
      _push(` Batch 1, 2, 3 tersedia </div></div></div></div><div class="group hover:bg-gray-50 transition-colors duration-200 p-6 rounded-lg border border-gray-200"><div class="flex items-start"><div class="flex-shrink-0 mr-4"><img${ssrRenderAttr("src", unref(chatGptLogoUrl))} alt="ChatGPT Logo" class="w-10 h-8"></div><div class="flex-1"><h4 class="text-lg font-semibold text-gray-900 mb-2">GenAI Masterclass</h4><p class="text-gray-600 text-sm mb-3"> Kuasai kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja </p><div class="flex items-center text-sm text-[#941e20] font-medium">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 mr-1" }, null, _parent));
      _push(` Batch 2, 3, 4 tersedia </div></div></div></div><div class="group hover:bg-gray-50 transition-colors duration-200 p-6 rounded-lg border border-gray-200"><div class="flex items-start"><div class="flex-shrink-0 mr-4"><img${ssrRenderAttr("src", unref(awsLogoUrl))} alt="AWS Logo" class="w-10 h-8"></div><div class="flex-1"><h4 class="text-lg font-semibold text-gray-900 mb-2">AWS Foundational Certificate</h4><p class="text-gray-600 text-sm mb-3"> Dapatkan kemahiran cloud computing dan pensijilan AWS yang diiktiraf industri </p><div class="flex items-center text-sm text-[#941e20] font-medium">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 mr-1" }, null, _parent));
      _push(` Batch 1, 2, 3 tersedia </div></div></div></div></div><div class="mt-8 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg"><div class="flex items-start">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<div><p class="text-amber-800 font-medium text-sm"> Tarikh mula program akan dimaklumkan selepas proses pemilihan selesai </p></div></div></div></div><div class="space-y-8"><div><h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-[#941e20] mr-3" }, null, _parent));
      _push(` Struktur Program </h3><div class="bg-[#941e20] text-white p-6 rounded-lg mb-6"><div class="text-center"><div class="text-3xl font-bold mb-2">4 Minggu</div><div class="text-red-100">Komitmen Penuh Diperlukan</div></div></div><div class="space-y-4"><div class="flex items-start p-4 border border-gray-200 rounded-lg"><div class="flex-shrink-0 w-8 h-8 bg-[#941e20] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4"> 1-3 </div><div><h4 class="font-semibold text-gray-900 mb-1">Minggu 1–3: Pembelajaran Fizikal</h4><p class="text-gray-600 text-sm"> Kehadiran sepenuh masa di YP Advanced Skills, Kuantan </p></div></div><div class="flex items-start p-4 border border-gray-200 rounded-lg"><div class="flex-shrink-0 w-8 h-8 bg-[#941e20] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4"> 4 </div><div><h4 class="font-semibold text-gray-900 mb-1">Minggu 4: Pembelajaran Dalam Talian</h4><p class="text-gray-600 text-sm"> Projek capstone dan persediaan kerjaya </p></div></div></div></div><div><h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Package), { class: "w-5 h-5 text-[#941e20] mr-2" }, null, _parent));
      _push(` Apa Yang Disediakan </h4><ul class="space-y-3"><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-[#941e20] mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Latihan hands-on dengan projek sebenar</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-[#941e20] mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Modul pembelajaran dan pensijilan yang diiktiraf</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-[#941e20] mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Bimbingan kerjaya dan bantuan penempatan kerja</span></li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramYangDitawarkan.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "SiapaPatutMemohon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Siapa Patut Memohon? </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Program ini direka khas untuk </p></div><ul class="space-y-6 max-w-2xl mx-auto text-left mb-12"><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<div><h3 class="text-lg font-semibold text-gray-900 mb-1"> Graduan Baharu </h3><p class="text-gray-700"> Graduan baharu yang mencari pekerjaan dalam bidang teknologi/kejuruteraan atau hanya perlu meningkatkan kemahiran mereka </p></div></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(Briefcase), { class: "flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" }, null, _parent));
      _push(`<div><h3 class="text-lg font-semibold text-gray-900 mb-1"> Graduan Yang Sudah Mempunyai Tawaran Kerja </h3><p class="text-gray-700"> Graduan yang sudah mempunyai tawaran kerja tetapi memerlukan sokongan untuk bermula dengan <span class="font-semibold text-red-800">pensijilan industri dan kesediaan kerja</span></p></div></li></ul><div class="bg-red-50 border-l-4 border-red-800 p-6 rounded-r-lg"><div class="flex items-start">`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<div><h4 class="text-lg font-semibold text-red-800 mb-2"> Penyertaan Terhad! </h4><p class="text-red-700"> Jangan lepaskan peluang emas ini untuk menempah tempat anda dan dijemput ke taklimat program serta pemilihan calon kami. </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SiapaPatutMemohon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/radio-group/RadioGroup.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/radio-group/RadioGroupItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/label/Label.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input/Input.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    defaultValue: { type: [String, Number], required: false },
    modelValue: { type: [String, Number], required: false }
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
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        "data-slot": "textarea",
        class: unref(cn)(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          props.class
        )
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/textarea/Textarea.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/Card.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CardDescription",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        "data-slot": "card-description",
        class: unref(cn)("text-muted-foreground text-sm", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardDescription.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardTitle.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    dir: { type: String, required: false },
    orientation: { type: String, required: false },
    unmountOnHide: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    type: { type: String, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps({ "data-slot": "accordion" }, unref(forwarded), _attrs), {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/accordion/Accordion.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps({ "data-slot": "accordion-content" }, unref(delegatedProps), { class: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(cn)("pt-0 pb-4", props.class))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(cn)("pt-0 pb-4", props.class)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    value: { type: String, required: true },
    unmountOnHide: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps({ "data-slot": "accordion-item" }, unref(forwardedProps), {
        class: unref(cn)("border-b last:border-b-0", props.class)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AccordionTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({ class: "flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps({ "data-slot": "accordion-trigger" }, unref(delegatedProps), {
              class: unref(cn)(
                "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronDown), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(unref(ChevronDown), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps({ "data-slot": "accordion-trigger" }, unref(delegatedProps), {
                class: unref(cn)(
                  "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(ChevronDown), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
                  ])
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function useProgramForm() {
  const registrationReasons = ref([]);
  const selectedPrograms = ref([]);
  const form = useForm({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    interviewWillingness: "",
    registrationReasonsOther: "",
    commitmentLevel: "",
    commitmentLevelOther: "",
    programInterest: "",
    intakeBatch: "",
    pythonBatch: "",
    genaiBatch: "",
    awsBatch: "",
    referralCode: "",
    pahangConnection: "",
    pahangConnectionOther: "",
    furtherInquiries: ""
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
  const updateSelectedPrograms = (value, checked) => {
    if (checked) {
      if (!selectedPrograms.value.includes(value)) {
        selectedPrograms.value.push(value);
      }
    } else {
      const index = selectedPrograms.value.indexOf(value);
      if (index > -1) {
        selectedPrograms.value.splice(index, 1);
      }
    }
  };
  const handleProgramChange = (value, checked) => {
    updateSelectedPrograms(value, checked);
  };
  const isProgramSelected = (value) => {
    return selectedPrograms.value.includes(value);
  };
  const submitForm = () => {
    form.transform((data) => ({
      ...data,
      registrationReasons: registrationReasons.value,
      selectedPrograms: form.programInterest === "more-than-one" ? selectedPrograms.value : []
    })).post("/program", {
      preserveScroll: true,
      onSuccess: () => {
      },
      onError: (errors) => {
        console.log("Form errors:", errors);
      }
    });
  };
  return {
    form,
    registrationReasons,
    selectedPrograms,
    updateRegistrationReasons,
    handleRegistrationReasonChange,
    isReasonSelected,
    updateSelectedPrograms,
    handleProgramChange,
    isProgramSelected,
    processing: form.processing,
    submitForm
  };
}
const _sfc_main$1 = {
  __name: "ProgramForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { form, handleRegistrationReasonChange, isReasonSelected, handleProgramChange, isProgramSelected, processing } = useProgramForm();
    const { awsLogoUrl, chatGptLogoUrl, pythonLogoUrl } = useAppearance();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background" }, _attrs))}>`);
      _push(ssrRenderComponent(ProgramHeader, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(`<div class="bg-card py-16 sm:py-20"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-sm font-bold text-card-foreground mb-4"> Borang Permohonan </h2><p class="text-sm text-muted-foreground max-w-2xl mx-auto"> Sila lengkapkan maklumat berikut untuk memohon program ini </p></div><form class="space-y-6">`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$f), {
                    modelValue: unref(form).pahangConnection,
                    "onUpdate:modelValue": ($event) => unref(form).pahangConnection = $event,
                    class: "space-y-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "born-pahang",
                          value: "born-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "living-pahang",
                          value: "living-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "parents-pahang",
                          value: "parents-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "other-pahang",
                          value: "other-pahang"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$b), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "born-pahang",
                              value: "born-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "living-pahang",
                              value: "living-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "parents-pahang",
                              value: "parents-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "other-pahang",
                              value: "other-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "other-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).pahangConnection === "other-pahang" ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apakah kaitan anda dengan negeri Pahang? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$f), {
                        modelValue: unref(form).pahangConnection,
                        "onUpdate:modelValue": ($event) => unref(form).pahangConnection = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "born-pahang",
                              value: "born-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "living-pahang",
                              value: "living-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "parents-pahang",
                              value: "parents-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "other-pahang",
                              value: "other-pahang"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "other-pahang",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).pahangConnection === "other-pahang" ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
              createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Apakah kaitan anda dengan negeri Pahang? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$f), {
                      modelValue: unref(form).pahangConnection,
                      "onUpdate:modelValue": ($event) => unref(form).pahangConnection = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$e), {
                            id: "born-pahang",
                            value: "born-pahang"
                          }),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$e), {
                            id: "living-pahang",
                            value: "living-pahang"
                          }),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$e), {
                            id: "parents-pahang",
                            value: "parents-pahang"
                          }),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$e), {
                            id: "other-pahang",
                            value: "other-pahang"
                          }),
                          createVNode(unref(_sfc_main$c), {
                            for: "other-pahang",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lain-lain:")
                            ]),
                            _: 1
                          }),
                          unref(form).pahangConnection === "other-pahang" ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
      _push(`<div class="space-y-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
      _push(ssrRenderComponent(unref(_sfc_main$b), {
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
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
      _push(ssrRenderComponent(unref(_sfc_main$b), {
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
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
      _push(ssrRenderComponent(unref(_sfc_main$b), {
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
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
      _push(ssrRenderComponent(unref(_sfc_main$b), {
        modelValue: unref(form).age,
        "onUpdate:modelValue": ($event) => unref(form).age = $event,
        type: "number",
        placeholder: "Masukkan umur anda (20-35 tahun)",
        min: "20",
        max: "35",
        class: "w-full"
      }, null, _parent));
      if (unref(form).errors.age) {
        _push(`<p class="text-sm text-destructive">${ssrInterpolate(unref(form).errors.age)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Adakah anda bersedia untuk ditemuduga terlebih dahulu sebelum diterima ke dalam program? <span class="text-destructive"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode(" Adakah anda bersedia untuk ditemuduga terlebih dahulu sebelum diterima ke dalam program? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$f), {
                    modelValue: unref(form).interviewWillingness,
                    "onUpdate:modelValue": ($event) => unref(form).interviewWillingness = $event,
                    class: "space-y-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "interview-yes",
                          value: "yes"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
                          for: "interview-yes",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ya`);
                            } else {
                              return [
                                createTextVNode("Ya")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "interview-no",
                          value: "no"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
                          for: "interview-no",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tidak`);
                            } else {
                              return [
                                createTextVNode("Tidak")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "interview-yes",
                              value: "yes"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "interview-yes",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "interview-no",
                              value: "no"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "interview-no",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tidak")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(form).errors.interviewWillingness) {
                    _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.interviewWillingness)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Adakah anda bersedia untuk ditemuduga terlebih dahulu sebelum diterima ke dalam program? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$f), {
                        modelValue: unref(form).interviewWillingness,
                        "onUpdate:modelValue": ($event) => unref(form).interviewWillingness = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "interview-yes",
                              value: "yes"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "interview-yes",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "interview-no",
                              value: "no"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "interview-no",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tidak")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(form).errors.interviewWillingness ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-destructive"
                      }, toDisplayString(unref(form).errors.interviewWillingness), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Adakah anda bersedia untuk ditemuduga terlebih dahulu sebelum diterima ke dalam program? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$f), {
                      modelValue: unref(form).interviewWillingness,
                      "onUpdate:modelValue": ($event) => unref(form).interviewWillingness = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$e), {
                            id: "interview-yes",
                            value: "yes"
                          }),
                          createVNode(unref(_sfc_main$c), {
                            for: "interview-yes",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ya")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$e), {
                            id: "interview-no",
                            value: "no"
                          }),
                          createVNode(unref(_sfc_main$c), {
                            for: "interview-no",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tidak")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    unref(form).errors.interviewWillingness ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-destructive"
                    }, toDisplayString(unref(form).errors.interviewWillingness), 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$9), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    id: "upskill",
                    "model-value": unref(isReasonSelected)("upskill"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("upskill", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    id: "certificate",
                    "model-value": unref(isReasonSelected)("certificate"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("certificate", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    id: "job",
                    "model-value": unref(isReasonSelected)("job"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("job", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    id: "other-reason",
                    "model-value": unref(isReasonSelected)("other"),
                    "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("other", checked)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
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
                    _push3(ssrRenderComponent(unref(_sfc_main$b), {
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
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apakah sebab utama anda mendaftar? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$d), {
                            id: "upskill",
                            "model-value": unref(isReasonSelected)("upskill"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("upskill", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$d), {
                            id: "certificate",
                            "model-value": unref(isReasonSelected)("certificate"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("certificate", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$d), {
                            id: "job",
                            "model-value": unref(isReasonSelected)("job"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("job", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$d), {
                            id: "other-reason",
                            "model-value": unref(isReasonSelected)("other"),
                            "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("other", checked)
                          }, null, 8, ["model-value", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$c), {
                            for: "other-reason",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lain-lain:")
                            ]),
                            _: 1
                          }),
                          unref(isReasonSelected)("other") ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
              createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Apakah sebab utama anda mendaftar? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(_sfc_main$d), {
                          id: "upskill",
                          "model-value": unref(isReasonSelected)("upskill"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("upskill", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$c), {
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
                        createVNode(unref(_sfc_main$d), {
                          id: "certificate",
                          "model-value": unref(isReasonSelected)("certificate"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("certificate", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$c), {
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
                        createVNode(unref(_sfc_main$d), {
                          id: "job",
                          "model-value": unref(isReasonSelected)("job"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("job", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$c), {
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
                        createVNode(unref(_sfc_main$d), {
                          id: "other-reason",
                          "model-value": unref(isReasonSelected)("other"),
                          "onUpdate:modelValue": (checked) => unref(handleRegistrationReasonChange)("other", checked)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$c), {
                          for: "other-reason",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Lain-lain:")
                          ]),
                          _: 1
                        }),
                        unref(isReasonSelected)("other") ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
      _push(ssrRenderComponent(unref(_sfc_main$9), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Adakah anda bersedia untuk komited dengan latihan selama 1 bulan ini? <span class="text-destructive"${_scopeId3}>*</span>`);
                      } else {
                        return [
                          createTextVNode(" Adakah anda bersedia untuk komited dengan latihan selama 1 bulan ini? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$f), {
                    modelValue: unref(form).commitmentLevel,
                    "onUpdate:modelValue": ($event) => unref(form).commitmentLevel = $event,
                    class: "space-y-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "fully-committed",
                          value: "fully-committed"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
                          for: "fully-committed",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ya, saya komited sepenuhnya`);
                            } else {
                              return [
                                createTextVNode("Ya, saya komited sepenuhnya")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "need-info",
                          value: "need-info"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
                          for: "need-info",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Saya memerlukan lebih banyak maklumat sebelum membuat keputusan`);
                            } else {
                              return [
                                createTextVNode("Saya memerlukan lebih banyak maklumat sebelum membuat keputusan")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "not-sure",
                          value: "not-sure"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          id: "other-commitment",
                          value: "other-commitment"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$b), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "fully-committed",
                              value: "fully-committed"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "fully-committed",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya, saya komited sepenuhnya")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "need-info",
                              value: "need-info"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "need-info",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya memerlukan lebih banyak maklumat sebelum membuat keputusan")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "not-sure",
                              value: "not-sure"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "other-commitment",
                              value: "other-commitment"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "other-commitment",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).commitmentLevel === "other-commitment" ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Adakah anda bersedia untuk komited dengan latihan selama 1 bulan ini? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$f), {
                        modelValue: unref(form).commitmentLevel,
                        "onUpdate:modelValue": ($event) => unref(form).commitmentLevel = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "fully-committed",
                              value: "fully-committed"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "fully-committed",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ya, saya komited sepenuhnya")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "need-info",
                              value: "need-info"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "need-info",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Saya memerlukan lebih banyak maklumat sebelum membuat keputusan")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "not-sure",
                              value: "not-sure"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                            createVNode(unref(_sfc_main$e), {
                              id: "other-commitment",
                              value: "other-commitment"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "other-commitment",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Lain-lain:")
                              ]),
                              _: 1
                            }),
                            unref(form).commitmentLevel === "other-commitment" ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
              createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Adakah anda bersedia untuk komited dengan latihan selama 1 bulan ini? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$f), {
                      modelValue: unref(form).commitmentLevel,
                      "onUpdate:modelValue": ($event) => unref(form).commitmentLevel = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$e), {
                            id: "fully-committed",
                            value: "fully-committed"
                          }),
                          createVNode(unref(_sfc_main$c), {
                            for: "fully-committed",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ya, saya komited sepenuhnya")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$e), {
                            id: "need-info",
                            value: "need-info"
                          }),
                          createVNode(unref(_sfc_main$c), {
                            for: "need-info",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Saya memerlukan lebih banyak maklumat sebelum membuat keputusan")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(unref(_sfc_main$e), {
                            id: "not-sure",
                            value: "not-sure"
                          }),
                          createVNode(unref(_sfc_main$c), {
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
                          createVNode(unref(_sfc_main$e), {
                            id: "other-commitment",
                            value: "other-commitment"
                          }),
                          createVNode(unref(_sfc_main$c), {
                            for: "other-commitment",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lain-lain:")
                            ]),
                            _: 1
                          }),
                          unref(form).commitmentLevel === "other-commitment" ? (openBlock(), createBlock(unref(_sfc_main$b), {
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
      _push(ssrRenderComponent(unref(_sfc_main$9), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
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
                  if (unref(form).programInterest !== "more-than-one") {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$f), {
                      modelValue: unref(form).programInterest,
                      "onUpdate:modelValue": ($event) => unref(form).programInterest = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "python-basic",
                            value: "python-basic"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "python-basic",
                            class: "text-sm flex items-center space-x-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", unref(pythonLogoUrl))} alt="Python Logo" class="w-8 h-6"${_scopeId4}><span${_scopeId4}>Python Basic Programming</span>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: unref(pythonLogoUrl),
                                    alt: "Python Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "Python Basic Programming")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "genai-masterclass",
                            value: "genai-masterclass"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "genai-masterclass",
                            class: "text-sm flex items-center space-x-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", unref(chatGptLogoUrl))} alt="ChatGPT Logo" class="w-8 h-6"${_scopeId4}><span${_scopeId4}>GenAI Masterclass</span>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: unref(chatGptLogoUrl),
                                    alt: "ChatGPT Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "GenAI Masterclass")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "aws-foundational",
                            value: "aws-foundational"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "aws-foundational",
                            class: "text-sm flex items-center space-x-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", unref(awsLogoUrl))} alt="AWS Logo" class="w-8 h-6"${_scopeId4}><span${_scopeId4}>AWS Foundational Certificate</span>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: unref(awsLogoUrl),
                                    alt: "AWS Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "AWS Foundational Certificate")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "more-than-one",
                            value: "more-than-one"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
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
                              createVNode(unref(_sfc_main$e), {
                                id: "python-basic",
                                value: "python-basic"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-basic",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(pythonLogoUrl),
                                    alt: "Python Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "Python Basic Programming")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-masterclass",
                                value: "genai-masterclass"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-masterclass",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(chatGptLogoUrl),
                                    alt: "ChatGPT Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "GenAI Masterclass")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-foundational",
                                value: "aws-foundational"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-foundational",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(awsLogoUrl),
                                    alt: "AWS Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "AWS Foundational Certificate")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "more-than-one",
                                value: "more-than-one"
                              }),
                              createVNode(unref(_sfc_main$c), {
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
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="space-y-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$m), {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: ($event) => unref(form).programInterest = "",
                      class: "text-sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` ← Kembali ke pilihan tunggal `);
                        } else {
                          return [
                            createTextVNode(" ← Kembali ke pilihan tunggal ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="border-t pt-4 space-y-3"${_scopeId2}><p class="text-sm font-medium text-card-foreground"${_scopeId2}> Pilih program yang anda minati: <span class="text-destructive"${_scopeId2}>*</span></p><div class="space-y-3"${_scopeId2}><div class="flex items-center space-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$d), {
                      id: "multi-python",
                      "model-value": unref(isProgramSelected)("python-basic"),
                      "onUpdate:modelValue": (checked) => unref(handleProgramChange)("python-basic", checked)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$c), {
                      for: "multi-python",
                      class: "text-sm flex items-center space-x-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(pythonLogoUrl))} alt="Python Logo" class="w-8 h-6"${_scopeId3}><span${_scopeId3}>Python Basic Programming</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(pythonLogoUrl),
                              alt: "Python Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "Python Basic Programming")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="flex items-center space-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$d), {
                      id: "multi-genai",
                      "model-value": unref(isProgramSelected)("genai-masterclass"),
                      "onUpdate:modelValue": (checked) => unref(handleProgramChange)("genai-masterclass", checked)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$c), {
                      for: "multi-genai",
                      class: "text-sm flex items-center space-x-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(chatGptLogoUrl))} alt="ChatGPT Logo" class="w-8 h-6"${_scopeId3}><span${_scopeId3}>GenAI Masterclass</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(chatGptLogoUrl),
                              alt: "ChatGPT Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "GenAI Masterclass")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="flex items-center space-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$d), {
                      id: "multi-aws",
                      "model-value": unref(isProgramSelected)("aws-foundational"),
                      "onUpdate:modelValue": (checked) => unref(handleProgramChange)("aws-foundational", checked)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$c), {
                      for: "multi-aws",
                      class: "text-sm flex items-center space-x-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(awsLogoUrl))} alt="AWS Logo" class="w-8 h-6"${_scopeId3}><span${_scopeId3}>AWS Foundational Certificate</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(awsLogoUrl),
                              alt: "AWS Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "AWS Foundational Certificate")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    if (unref(form).errors.selectedPrograms) {
                      _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.selectedPrograms)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  }
                  if (unref(form).errors.programInterest) {
                    _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.programInterest)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Apakah program yang anda minati? "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        _: 1
                      }),
                      unref(form).programInterest !== "more-than-one" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(unref(_sfc_main$f), {
                          modelValue: unref(form).programInterest,
                          "onUpdate:modelValue": ($event) => unref(form).programInterest = $event,
                          class: "space-y-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-basic",
                                value: "python-basic"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-basic",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(pythonLogoUrl),
                                    alt: "Python Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "Python Basic Programming")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-masterclass",
                                value: "genai-masterclass"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-masterclass",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(chatGptLogoUrl),
                                    alt: "ChatGPT Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "GenAI Masterclass")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-foundational",
                                value: "aws-foundational"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-foundational",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(awsLogoUrl),
                                    alt: "AWS Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "AWS Foundational Certificate")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "more-than-one",
                                value: "more-than-one"
                              }),
                              createVNode(unref(_sfc_main$c), {
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "space-y-4"
                      }, [
                        createVNode(unref(_sfc_main$m), {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          onClick: ($event) => unref(form).programInterest = "",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" ← Kembali ke pilihan tunggal ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode("div", { class: "border-t pt-4 space-y-3" }, [
                          createVNode("p", { class: "text-sm font-medium text-card-foreground" }, [
                            createTextVNode(" Pilih program yang anda minati: "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$d), {
                                id: "multi-python",
                                "model-value": unref(isProgramSelected)("python-basic"),
                                "onUpdate:modelValue": (checked) => unref(handleProgramChange)("python-basic", checked)
                              }, null, 8, ["model-value", "onUpdate:modelValue"]),
                              createVNode(unref(_sfc_main$c), {
                                for: "multi-python",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(pythonLogoUrl),
                                    alt: "Python Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "Python Basic Programming")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$d), {
                                id: "multi-genai",
                                "model-value": unref(isProgramSelected)("genai-masterclass"),
                                "onUpdate:modelValue": (checked) => unref(handleProgramChange)("genai-masterclass", checked)
                              }, null, 8, ["model-value", "onUpdate:modelValue"]),
                              createVNode(unref(_sfc_main$c), {
                                for: "multi-genai",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(chatGptLogoUrl),
                                    alt: "ChatGPT Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "GenAI Masterclass")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$d), {
                                id: "multi-aws",
                                "model-value": unref(isProgramSelected)("aws-foundational"),
                                "onUpdate:modelValue": (checked) => unref(handleProgramChange)("aws-foundational", checked)
                              }, null, 8, ["model-value", "onUpdate:modelValue"]),
                              createVNode(unref(_sfc_main$c), {
                                for: "multi-aws",
                                class: "text-sm flex items-center space-x-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(awsLogoUrl),
                                    alt: "AWS Logo",
                                    class: "w-8 h-6"
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, "AWS Foundational Certificate")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          unref(form).errors.selectedPrograms ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.selectedPrograms), 1)) : createCommentVNode("", true)
                        ])
                      ])),
                      unref(form).errors.programInterest ? (openBlock(), createBlock("p", {
                        key: 2,
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
              createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode(" Apakah program yang anda minati? "),
                        createVNode("span", { class: "text-destructive" }, "*")
                      ]),
                      _: 1
                    }),
                    unref(form).programInterest !== "more-than-one" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(unref(_sfc_main$f), {
                        modelValue: unref(form).programInterest,
                        "onUpdate:modelValue": ($event) => unref(form).programInterest = $event,
                        class: "space-y-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "python-basic",
                              value: "python-basic"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "python-basic",
                              class: "text-sm flex items-center space-x-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(pythonLogoUrl),
                                  alt: "Python Logo",
                                  class: "w-8 h-6"
                                }, null, 8, ["src"]),
                                createVNode("span", null, "Python Basic Programming")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "genai-masterclass",
                              value: "genai-masterclass"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "genai-masterclass",
                              class: "text-sm flex items-center space-x-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(chatGptLogoUrl),
                                  alt: "ChatGPT Logo",
                                  class: "w-8 h-6"
                                }, null, 8, ["src"]),
                                createVNode("span", null, "GenAI Masterclass")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "aws-foundational",
                              value: "aws-foundational"
                            }),
                            createVNode(unref(_sfc_main$c), {
                              for: "aws-foundational",
                              class: "text-sm flex items-center space-x-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(awsLogoUrl),
                                  alt: "AWS Logo",
                                  class: "w-8 h-6"
                                }, null, 8, ["src"]),
                                createVNode("span", null, "AWS Foundational Certificate")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$e), {
                              id: "more-than-one",
                              value: "more-than-one"
                            }),
                            createVNode(unref(_sfc_main$c), {
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-4"
                    }, [
                      createVNode(unref(_sfc_main$m), {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: ($event) => unref(form).programInterest = "",
                        class: "text-sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" ← Kembali ke pilihan tunggal ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", { class: "border-t pt-4 space-y-3" }, [
                        createVNode("p", { class: "text-sm font-medium text-card-foreground" }, [
                          createTextVNode(" Pilih program yang anda minati: "),
                          createVNode("span", { class: "text-destructive" }, "*")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$d), {
                              id: "multi-python",
                              "model-value": unref(isProgramSelected)("python-basic"),
                              "onUpdate:modelValue": (checked) => unref(handleProgramChange)("python-basic", checked)
                            }, null, 8, ["model-value", "onUpdate:modelValue"]),
                            createVNode(unref(_sfc_main$c), {
                              for: "multi-python",
                              class: "text-sm flex items-center space-x-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(pythonLogoUrl),
                                  alt: "Python Logo",
                                  class: "w-8 h-6"
                                }, null, 8, ["src"]),
                                createVNode("span", null, "Python Basic Programming")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$d), {
                              id: "multi-genai",
                              "model-value": unref(isProgramSelected)("genai-masterclass"),
                              "onUpdate:modelValue": (checked) => unref(handleProgramChange)("genai-masterclass", checked)
                            }, null, 8, ["model-value", "onUpdate:modelValue"]),
                            createVNode(unref(_sfc_main$c), {
                              for: "multi-genai",
                              class: "text-sm flex items-center space-x-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(chatGptLogoUrl),
                                  alt: "ChatGPT Logo",
                                  class: "w-8 h-6"
                                }, null, 8, ["src"]),
                                createVNode("span", null, "GenAI Masterclass")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2" }, [
                            createVNode(unref(_sfc_main$d), {
                              id: "multi-aws",
                              "model-value": unref(isProgramSelected)("aws-foundational"),
                              "onUpdate:modelValue": (checked) => unref(handleProgramChange)("aws-foundational", checked)
                            }, null, 8, ["model-value", "onUpdate:modelValue"]),
                            createVNode(unref(_sfc_main$c), {
                              for: "multi-aws",
                              class: "text-sm flex items-center space-x-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: unref(awsLogoUrl),
                                  alt: "AWS Logo",
                                  class: "w-8 h-6"
                                }, null, 8, ["src"]),
                                createVNode("span", null, "AWS Foundational Certificate")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        unref(form).errors.selectedPrograms ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm text-destructive"
                        }, toDisplayString(unref(form).errors.selectedPrograms), 1)) : createCommentVNode("", true)
                      ])
                    ])),
                    unref(form).errors.programInterest ? (openBlock(), createBlock("p", {
                      key: 2,
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
      if (unref(form).programInterest === "python-basic" || unref(form).programInterest === "more-than-one" && unref(isProgramSelected)("python-basic")) {
        _push(ssrRenderComponent(unref(_sfc_main$9), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(pythonLogoUrl))} alt="Python Logo" class="w-8 h-6"${_scopeId3}><span${_scopeId3}>Python Basic Programming</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(pythonLogoUrl),
                              alt: "Python Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "Python Basic Programming")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "single",
                      collapsible: "",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "description" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Pengenalan Program `);
                                    } else {
                                      return [
                                        createTextVNode(" Pengenalan Program ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. `);
                                          } else {
                                            return [
                                              createTextVNode(" Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pengenalan Program ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "what-you-get" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Apa Yang Anda Akan Perolehi `);
                                    } else {
                                      return [
                                        createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-y-3 text-muted-foreground"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>Asas &amp; Lanjutan Python:</strong> Programming berorientasikan object, debugging, dan optimization. </div><div${_scopeId5}><strong${_scopeId5}>Pembangunan API &amp; Database Integration:</strong> Membina RESTful API, web scraping, dan bekerja dengan pelbagai database. </div><div${_scopeId5}><strong${_scopeId5}>Business Automation:</strong> Scripting untuk proses sebenar. </div><div${_scopeId5}><strong${_scopeId5}>Portfolio Project Industry:</strong> Real-world coding challenges &amp; projects for career showcase. </div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Asas & Lanjutan Python:"),
                                            createTextVNode(" Programming berorientasikan object, debugging, dan optimization. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Pembangunan API & Database Integration:"),
                                            createTextVNode(" Membina RESTful API, web scraping, dan bekerja dengan pelbagai database. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Business Automation:"),
                                            createTextVNode(" Scripting untuk proses sebenar. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Portfolio Project Industry:"),
                                            createTextVNode(" Real-world coding challenges & projects for career showcase. ")
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Asas & Lanjutan Python:"),
                                          createTextVNode(" Programming berorientasikan object, debugging, dan optimization. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Pembangunan API & Database Integration:"),
                                          createTextVNode(" Membina RESTful API, web scraping, dan bekerja dengan pelbagai database. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Business Automation:"),
                                          createTextVNode(" Scripting untuk proses sebenar. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Portfolio Project Industry:"),
                                          createTextVNode(" Real-world coding challenges & projects for career showcase. ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "course-outline" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Rangka Kursus (4 Minggu) `);
                                    } else {
                                      return [
                                        createTextVNode(" Rangka Kursus (4 Minggu) ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-y-3 text-muted-foreground"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>Minggu 1:</strong> Asas Python, OOP &amp; Debugging </div><div${_scopeId5}><strong${_scopeId5}>Minggu 2:</strong> Pembangunan API, Integrasi Pangkalan Data, Web Scraping </div><div${_scopeId5}><strong${_scopeId5}>Minggu 3:</strong> Struktur Data Lanjutan, Automasi &amp; Cabaran Pengaturcaraan </div><div${_scopeId5}><strong${_scopeId5}>Minggu 4:</strong> Projek Capstone, Bengkel Portfolio &amp; Persediaan Temuduga </div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 1:"),
                                            createTextVNode(" Asas Python, OOP & Debugging ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 2:"),
                                            createTextVNode(" Pembangunan API, Integrasi Pangkalan Data, Web Scraping ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 3:"),
                                            createTextVNode(" Struktur Data Lanjutan, Automasi & Cabaran Pengaturcaraan ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 4:"),
                                            createTextVNode(" Projek Capstone, Bengkel Portfolio & Persediaan Temuduga ")
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rangka Kursus (4 Minggu) ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 1:"),
                                          createTextVNode(" Asas Python, OOP & Debugging ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 2:"),
                                          createTextVNode(" Pembangunan API, Integrasi Pangkalan Data, Web Scraping ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 3:"),
                                          createTextVNode(" Struktur Data Lanjutan, Automasi & Cabaran Pengaturcaraan ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 4:"),
                                          createTextVNode(" Projek Capstone, Bengkel Portfolio & Persediaan Temuduga ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$3), { value: "description" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pengenalan Program ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Asas & Lanjutan Python:"),
                                        createTextVNode(" Programming berorientasikan object, debugging, dan optimization. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Pembangunan API & Database Integration:"),
                                        createTextVNode(" Membina RESTful API, web scraping, dan bekerja dengan pelbagai database. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Business Automation:"),
                                        createTextVNode(" Scripting untuk proses sebenar. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Portfolio Project Industry:"),
                                        createTextVNode(" Real-world coding challenges & projects for career showcase. ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rangka Kursus (4 Minggu) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 1:"),
                                        createTextVNode(" Asas Python, OOP & Debugging ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 2:"),
                                        createTextVNode(" Pembangunan API, Integrasi Pangkalan Data, Web Scraping ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 3:"),
                                        createTextVNode(" Struktur Data Lanjutan, Automasi & Cabaran Pengaturcaraan ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 4:"),
                                        createTextVNode(" Projek Capstone, Bengkel Portfolio & Persediaan Temuduga ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Intake Batch <span class="text-destructive"${_scopeId3}>*</span>`);
                        } else {
                          return [
                            createTextVNode(" Intake Batch "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$f), {
                      modelValue: unref(form).pythonBatch,
                      "onUpdate:modelValue": ($event) => unref(form).pythonBatch = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "python-batch-1",
                            value: "batch-1"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "python-batch-1",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 1`);
                              } else {
                                return [
                                  createTextVNode("Batch 1")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "python-batch-2",
                            value: "batch-2"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "python-batch-2",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 2`);
                              } else {
                                return [
                                  createTextVNode("Batch 2")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "python-batch-3",
                            value: "batch-3"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "python-batch-3",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 3`);
                              } else {
                                return [
                                  createTextVNode("Batch 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-batch-1",
                                value: "batch-1"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-batch-1",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 1")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-batch-2",
                                value: "batch-2"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-batch-2",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 2")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-batch-3",
                                value: "batch-3"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-batch-3",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 3")
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(form).errors.pythonBatch) {
                      _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.pythonBatch)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(pythonLogoUrl),
                              alt: "Python Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "Python Basic Programming")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          type: "single",
                          collapsible: "",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3), { value: "description" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pengenalan Program ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Asas & Lanjutan Python:"),
                                        createTextVNode(" Programming berorientasikan object, debugging, dan optimization. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Pembangunan API & Database Integration:"),
                                        createTextVNode(" Membina RESTful API, web scraping, dan bekerja dengan pelbagai database. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Business Automation:"),
                                        createTextVNode(" Scripting untuk proses sebenar. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Portfolio Project Industry:"),
                                        createTextVNode(" Real-world coding challenges & projects for career showcase. ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rangka Kursus (4 Minggu) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 1:"),
                                        createTextVNode(" Asas Python, OOP & Debugging ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 2:"),
                                        createTextVNode(" Pembangunan API, Integrasi Pangkalan Data, Web Scraping ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 3:"),
                                        createTextVNode(" Struktur Data Lanjutan, Automasi & Cabaran Pengaturcaraan ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 4:"),
                                        createTextVNode(" Projek Capstone, Bengkel Portfolio & Persediaan Temuduga ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-5" }, [
                          createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                            default: withCtx(() => [
                              createTextVNode(" Intake Batch "),
                              createVNode("span", { class: "text-destructive" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$f), {
                            modelValue: unref(form).pythonBatch,
                            "onUpdate:modelValue": ($event) => unref(form).pythonBatch = $event,
                            class: "space-y-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "python-batch-1",
                                  value: "batch-1"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "python-batch-1",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 1")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "python-batch-2",
                                  value: "batch-2"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "python-batch-2",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 2")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "python-batch-3",
                                  value: "batch-3"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "python-batch-3",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 3")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.pythonBatch ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.pythonBatch), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(pythonLogoUrl),
                            alt: "Python Logo",
                            class: "w-8 h-6"
                          }, null, 8, ["src"]),
                          createVNode("span", null, "Python Basic Programming")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        type: "single",
                        collapsible: "",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { value: "description" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pengenalan Program ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar kerjaya ke bidang teknologi. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Asas & Lanjutan Python:"),
                                      createTextVNode(" Programming berorientasikan object, debugging, dan optimization. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Pembangunan API & Database Integration:"),
                                      createTextVNode(" Membina RESTful API, web scraping, dan bekerja dengan pelbagai database. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Business Automation:"),
                                      createTextVNode(" Scripting untuk proses sebenar. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Portfolio Project Industry:"),
                                      createTextVNode(" Real-world coding challenges & projects for career showcase. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rangka Kursus (4 Minggu) ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 1:"),
                                      createTextVNode(" Asas Python, OOP & Debugging ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 2:"),
                                      createTextVNode(" Pembangunan API, Integrasi Pangkalan Data, Web Scraping ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 3:"),
                                      createTextVNode(" Struktur Data Lanjutan, Automasi & Cabaran Pengaturcaraan ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 4:"),
                                      createTextVNode(" Projek Capstone, Bengkel Portfolio & Persediaan Temuduga ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                          default: withCtx(() => [
                            createTextVNode(" Intake Batch "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$f), {
                          modelValue: unref(form).pythonBatch,
                          "onUpdate:modelValue": ($event) => unref(form).pythonBatch = $event,
                          class: "space-y-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-batch-1",
                                value: "batch-1"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-batch-1",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 1")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-batch-2",
                                value: "batch-2"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-batch-2",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 2")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "python-batch-3",
                                value: "batch-3"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "python-batch-3",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 3")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(form).errors.pythonBatch ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm text-destructive"
                        }, toDisplayString(unref(form).errors.pythonBatch), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).programInterest === "genai-masterclass" || unref(form).programInterest === "more-than-one" && unref(isProgramSelected)("genai-masterclass")) {
        _push(ssrRenderComponent(unref(_sfc_main$9), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(chatGptLogoUrl))} alt="ChatGPT Logo" class="w-8 h-6"${_scopeId3}><span${_scopeId3}>GenAI Masterclass</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(chatGptLogoUrl),
                              alt: "ChatGPT Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "GenAI Masterclass")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "single",
                      collapsible: "",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "description" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Pengenalan Program `);
                                    } else {
                                      return [
                                        createTextVNode(" Pengenalan Program ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. `);
                                          } else {
                                            return [
                                              createTextVNode(" GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pengenalan Program ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "what-you-get" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Apa Yang Anda Akan Perolehi `);
                                    } else {
                                      return [
                                        createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-y-3 text-muted-foreground"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>Kemahiran AI Praktikal:</strong> Latihan langsung dengan alat Generative AI seperti ChatGPT dan Stable Diffusion. </div><div${_scopeId5}><strong${_scopeId5}>Kejuruteraan Prompt:</strong> Teknik membina prompt yang berkesan dan automasi kandungan perniagaan. </div><div${_scopeId5}><strong${_scopeId5}>Automasi Aliran Kerja:</strong> Aplikasi AI untuk pemasaran, sumber manusia, kewangan dan pelbagai sektor lain. </div><div${_scopeId5}><strong${_scopeId5}>Etika &amp; AI Bertanggungjawab:</strong> Cara melaksanakan AI secara beretika dan patuh peraturan. </div><div${_scopeId5}><strong${_scopeId5}>Projek Capstone:</strong> Selesaikan cabaran perniagaan sebenar dengan bimbingan portfolio dan kerjaya. </div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Kemahiran AI Praktikal:"),
                                            createTextVNode(" Latihan langsung dengan alat Generative AI seperti ChatGPT dan Stable Diffusion. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Kejuruteraan Prompt:"),
                                            createTextVNode(" Teknik membina prompt yang berkesan dan automasi kandungan perniagaan. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Automasi Aliran Kerja:"),
                                            createTextVNode(" Aplikasi AI untuk pemasaran, sumber manusia, kewangan dan pelbagai sektor lain. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Etika & AI Bertanggungjawab:"),
                                            createTextVNode(" Cara melaksanakan AI secara beretika dan patuh peraturan. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Projek Capstone:"),
                                            createTextVNode(" Selesaikan cabaran perniagaan sebenar dengan bimbingan portfolio dan kerjaya. ")
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Kemahiran AI Praktikal:"),
                                          createTextVNode(" Latihan langsung dengan alat Generative AI seperti ChatGPT dan Stable Diffusion. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Kejuruteraan Prompt:"),
                                          createTextVNode(" Teknik membina prompt yang berkesan dan automasi kandungan perniagaan. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Automasi Aliran Kerja:"),
                                          createTextVNode(" Aplikasi AI untuk pemasaran, sumber manusia, kewangan dan pelbagai sektor lain. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Etika & AI Bertanggungjawab:"),
                                          createTextVNode(" Cara melaksanakan AI secara beretika dan patuh peraturan. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Projek Capstone:"),
                                          createTextVNode(" Selesaikan cabaran perniagaan sebenar dengan bimbingan portfolio dan kerjaya. ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "course-outline" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Rangka Kursus (4 Minggu) `);
                                    } else {
                                      return [
                                        createTextVNode(" Rangka Kursus (4 Minggu) ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-y-3 text-muted-foreground"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>Minggu 1:</strong> Asas Generative AI &amp; Pengenalan Alat Industri </div><div${_scopeId5}><strong${_scopeId5}>Minggu 2:</strong> Kejuruteraan Prompt, Penjanaan Kandungan &amp; Automasi </div><div${_scopeId5}><strong${_scopeId5}>Minggu 3:</strong> Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI </div><div${_scopeId5}><strong${_scopeId5}>Minggu 4:</strong> Projek Capstone, Penilaian Portfolio &amp; Persediaan Kerjaya </div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 1:"),
                                            createTextVNode(" Asas Generative AI & Pengenalan Alat Industri ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 2:"),
                                            createTextVNode(" Kejuruteraan Prompt, Penjanaan Kandungan & Automasi ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 3:"),
                                            createTextVNode(" Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 4:"),
                                            createTextVNode(" Projek Capstone, Penilaian Portfolio & Persediaan Kerjaya ")
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rangka Kursus (4 Minggu) ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 1:"),
                                          createTextVNode(" Asas Generative AI & Pengenalan Alat Industri ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 2:"),
                                          createTextVNode(" Kejuruteraan Prompt, Penjanaan Kandungan & Automasi ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 3:"),
                                          createTextVNode(" Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 4:"),
                                          createTextVNode(" Projek Capstone, Penilaian Portfolio & Persediaan Kerjaya ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$3), { value: "description" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pengenalan Program ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Kemahiran AI Praktikal:"),
                                        createTextVNode(" Latihan langsung dengan alat Generative AI seperti ChatGPT dan Stable Diffusion. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Kejuruteraan Prompt:"),
                                        createTextVNode(" Teknik membina prompt yang berkesan dan automasi kandungan perniagaan. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Automasi Aliran Kerja:"),
                                        createTextVNode(" Aplikasi AI untuk pemasaran, sumber manusia, kewangan dan pelbagai sektor lain. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Etika & AI Bertanggungjawab:"),
                                        createTextVNode(" Cara melaksanakan AI secara beretika dan patuh peraturan. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Projek Capstone:"),
                                        createTextVNode(" Selesaikan cabaran perniagaan sebenar dengan bimbingan portfolio dan kerjaya. ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rangka Kursus (4 Minggu) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 1:"),
                                        createTextVNode(" Asas Generative AI & Pengenalan Alat Industri ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 2:"),
                                        createTextVNode(" Kejuruteraan Prompt, Penjanaan Kandungan & Automasi ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 3:"),
                                        createTextVNode(" Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 4:"),
                                        createTextVNode(" Projek Capstone, Penilaian Portfolio & Persediaan Kerjaya ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Intake Batch <span class="text-destructive"${_scopeId3}>*</span>`);
                        } else {
                          return [
                            createTextVNode(" Intake Batch "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$f), {
                      modelValue: unref(form).genaiBatch,
                      "onUpdate:modelValue": ($event) => unref(form).genaiBatch = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "genai-batch-2",
                            value: "batch-2"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "genai-batch-2",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 2`);
                              } else {
                                return [
                                  createTextVNode("Batch 2")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "genai-batch-3",
                            value: "batch-3"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "genai-batch-3",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 3`);
                              } else {
                                return [
                                  createTextVNode("Batch 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "genai-batch-4",
                            value: "batch-4"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "genai-batch-4",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 4`);
                              } else {
                                return [
                                  createTextVNode("Batch 4")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-batch-2",
                                value: "batch-2"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-batch-2",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 2")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-batch-3",
                                value: "batch-3"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-batch-3",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 3")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-batch-4",
                                value: "batch-4"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-batch-4",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 4")
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(form).errors.genaiBatch) {
                      _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.genaiBatch)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(chatGptLogoUrl),
                              alt: "ChatGPT Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "GenAI Masterclass")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          type: "single",
                          collapsible: "",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3), { value: "description" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pengenalan Program ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Kemahiran AI Praktikal:"),
                                        createTextVNode(" Latihan langsung dengan alat Generative AI seperti ChatGPT dan Stable Diffusion. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Kejuruteraan Prompt:"),
                                        createTextVNode(" Teknik membina prompt yang berkesan dan automasi kandungan perniagaan. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Automasi Aliran Kerja:"),
                                        createTextVNode(" Aplikasi AI untuk pemasaran, sumber manusia, kewangan dan pelbagai sektor lain. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Etika & AI Bertanggungjawab:"),
                                        createTextVNode(" Cara melaksanakan AI secara beretika dan patuh peraturan. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Projek Capstone:"),
                                        createTextVNode(" Selesaikan cabaran perniagaan sebenar dengan bimbingan portfolio dan kerjaya. ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rangka Kursus (4 Minggu) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 1:"),
                                        createTextVNode(" Asas Generative AI & Pengenalan Alat Industri ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 2:"),
                                        createTextVNode(" Kejuruteraan Prompt, Penjanaan Kandungan & Automasi ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 3:"),
                                        createTextVNode(" Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 4:"),
                                        createTextVNode(" Projek Capstone, Penilaian Portfolio & Persediaan Kerjaya ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-5" }, [
                          createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                            default: withCtx(() => [
                              createTextVNode(" Intake Batch "),
                              createVNode("span", { class: "text-destructive" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$f), {
                            modelValue: unref(form).genaiBatch,
                            "onUpdate:modelValue": ($event) => unref(form).genaiBatch = $event,
                            class: "space-y-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "genai-batch-2",
                                  value: "batch-2"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "genai-batch-2",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 2")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "genai-batch-3",
                                  value: "batch-3"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "genai-batch-3",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 3")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "genai-batch-4",
                                  value: "batch-4"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "genai-batch-4",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 4")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.genaiBatch ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.genaiBatch), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(chatGptLogoUrl),
                            alt: "ChatGPT Logo",
                            class: "w-8 h-6"
                          }, null, 8, ["src"]),
                          createVNode("span", null, "GenAI Masterclass")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        type: "single",
                        collapsible: "",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { value: "description" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pengenalan Program ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat berkembang. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Kemahiran AI Praktikal:"),
                                      createTextVNode(" Latihan langsung dengan alat Generative AI seperti ChatGPT dan Stable Diffusion. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Kejuruteraan Prompt:"),
                                      createTextVNode(" Teknik membina prompt yang berkesan dan automasi kandungan perniagaan. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Automasi Aliran Kerja:"),
                                      createTextVNode(" Aplikasi AI untuk pemasaran, sumber manusia, kewangan dan pelbagai sektor lain. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Etika & AI Bertanggungjawab:"),
                                      createTextVNode(" Cara melaksanakan AI secara beretika dan patuh peraturan. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Projek Capstone:"),
                                      createTextVNode(" Selesaikan cabaran perniagaan sebenar dengan bimbingan portfolio dan kerjaya. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rangka Kursus (4 Minggu) ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 1:"),
                                      createTextVNode(" Asas Generative AI & Pengenalan Alat Industri ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 2:"),
                                      createTextVNode(" Kejuruteraan Prompt, Penjanaan Kandungan & Automasi ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 3:"),
                                      createTextVNode(" Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 4:"),
                                      createTextVNode(" Projek Capstone, Penilaian Portfolio & Persediaan Kerjaya ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                          default: withCtx(() => [
                            createTextVNode(" Intake Batch "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$f), {
                          modelValue: unref(form).genaiBatch,
                          "onUpdate:modelValue": ($event) => unref(form).genaiBatch = $event,
                          class: "space-y-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-batch-2",
                                value: "batch-2"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-batch-2",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 2")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-batch-3",
                                value: "batch-3"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-batch-3",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 3")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "genai-batch-4",
                                value: "batch-4"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "genai-batch-4",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 4")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(form).errors.genaiBatch ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm text-destructive"
                        }, toDisplayString(unref(form).errors.genaiBatch), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).programInterest === "aws-foundational" || unref(form).programInterest === "more-than-one" && unref(isProgramSelected)("aws-foundational")) {
        _push(ssrRenderComponent(unref(_sfc_main$9), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(awsLogoUrl))} alt="AWS Logo" class="w-8 h-6"${_scopeId3}><span${_scopeId3}>AWS Foundational Certificate</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(awsLogoUrl),
                              alt: "AWS Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "AWS Foundational Certificate")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "single",
                      collapsible: "",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "description" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Pengenalan Program `);
                                    } else {
                                      return [
                                        createTextVNode(" Pengenalan Program ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. `);
                                          } else {
                                            return [
                                              createTextVNode(" Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pengenalan Program ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "what-you-get" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Apa Yang Anda Akan Perolehi `);
                                    } else {
                                      return [
                                        createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-y-3 text-muted-foreground"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>Asas &amp; Lanjutan AWS:</strong> Pengenalan mendalam AWS, seni bina awan, keselamatan dan servis teras. </div><div${_scopeId5}><strong${_scopeId5}>Kemahiran Hands-On AWS:</strong> Sediakan dan urus infrastruktur awan, laksana amalan keselamatan terbaik, serta penggunaan DevOps. </div><div${_scopeId5}><strong${_scopeId5}>Automasi &amp; DevOps:</strong> Infrastructure as Code, CI/CD pipeline &amp; automasi cloud. </div><div${_scopeId5}><strong${_scopeId5}>Persediaan Pensijilan:</strong> Latihan projek sebenar dan strategi peperiksaan AWS Cloud Practitioner &amp; Solutions Architect. </div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Asas & Lanjutan AWS:"),
                                            createTextVNode(" Pengenalan mendalam AWS, seni bina awan, keselamatan dan servis teras. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Kemahiran Hands-On AWS:"),
                                            createTextVNode(" Sediakan dan urus infrastruktur awan, laksana amalan keselamatan terbaik, serta penggunaan DevOps. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Automasi & DevOps:"),
                                            createTextVNode(" Infrastructure as Code, CI/CD pipeline & automasi cloud. ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Persediaan Pensijilan:"),
                                            createTextVNode(" Latihan projek sebenar dan strategi peperiksaan AWS Cloud Practitioner & Solutions Architect. ")
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Asas & Lanjutan AWS:"),
                                          createTextVNode(" Pengenalan mendalam AWS, seni bina awan, keselamatan dan servis teras. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Kemahiran Hands-On AWS:"),
                                          createTextVNode(" Sediakan dan urus infrastruktur awan, laksana amalan keselamatan terbaik, serta penggunaan DevOps. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Automasi & DevOps:"),
                                          createTextVNode(" Infrastructure as Code, CI/CD pipeline & automasi cloud. ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Persediaan Pensijilan:"),
                                          createTextVNode(" Latihan projek sebenar dan strategi peperiksaan AWS Cloud Practitioner & Solutions Architect. ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$3), { value: "course-outline" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Rangka Kursus (4 Minggu) `);
                                    } else {
                                      return [
                                        createTextVNode(" Rangka Kursus (4 Minggu) ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$4), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="space-y-3 text-muted-foreground"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>Minggu 1:</strong> Pengenalan AWS, Asas Cloud &amp; Servis Teras </div><div${_scopeId5}><strong${_scopeId5}>Minggu 2:</strong> Seni Bina AWS, Amalan Keselamatan &amp; Pengurusan Identiti </div><div${_scopeId5}><strong${_scopeId5}>Minggu 3:</strong> Automasi, DevOps &amp; Deployment Cloud Sebenar </div><div${_scopeId5}><strong${_scopeId5}>Minggu 4:</strong> Projek Capstone Cloud, Latihan Persijilan &amp; Persediaan Kerjaya </div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 1:"),
                                            createTextVNode(" Pengenalan AWS, Asas Cloud & Servis Teras ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 2:"),
                                            createTextVNode(" Seni Bina AWS, Amalan Keselamatan & Pengurusan Identiti ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 3:"),
                                            createTextVNode(" Automasi, DevOps & Deployment Cloud Sebenar ")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "Minggu 4:"),
                                            createTextVNode(" Projek Capstone Cloud, Latihan Persijilan & Persediaan Kerjaya ")
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rangka Kursus (4 Minggu) ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 1:"),
                                          createTextVNode(" Pengenalan AWS, Asas Cloud & Servis Teras ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 2:"),
                                          createTextVNode(" Seni Bina AWS, Amalan Keselamatan & Pengurusan Identiti ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 3:"),
                                          createTextVNode(" Automasi, DevOps & Deployment Cloud Sebenar ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "Minggu 4:"),
                                          createTextVNode(" Projek Capstone Cloud, Latihan Persijilan & Persediaan Kerjaya ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$3), { value: "description" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pengenalan Program ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Asas & Lanjutan AWS:"),
                                        createTextVNode(" Pengenalan mendalam AWS, seni bina awan, keselamatan dan servis teras. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Kemahiran Hands-On AWS:"),
                                        createTextVNode(" Sediakan dan urus infrastruktur awan, laksana amalan keselamatan terbaik, serta penggunaan DevOps. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Automasi & DevOps:"),
                                        createTextVNode(" Infrastructure as Code, CI/CD pipeline & automasi cloud. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Persediaan Pensijilan:"),
                                        createTextVNode(" Latihan projek sebenar dan strategi peperiksaan AWS Cloud Practitioner & Solutions Architect. ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rangka Kursus (4 Minggu) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 1:"),
                                        createTextVNode(" Pengenalan AWS, Asas Cloud & Servis Teras ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 2:"),
                                        createTextVNode(" Seni Bina AWS, Amalan Keselamatan & Pengurusan Identiti ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 3:"),
                                        createTextVNode(" Automasi, DevOps & Deployment Cloud Sebenar ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 4:"),
                                        createTextVNode(" Projek Capstone Cloud, Latihan Persijilan & Persediaan Kerjaya ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Intake Batch <span class="text-destructive"${_scopeId3}>*</span>`);
                        } else {
                          return [
                            createTextVNode(" Intake Batch "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$f), {
                      modelValue: unref(form).awsBatch,
                      "onUpdate:modelValue": ($event) => unref(form).awsBatch = $event,
                      class: "space-y-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "aws-batch-1",
                            value: "batch-1"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "aws-batch-1",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 1`);
                              } else {
                                return [
                                  createTextVNode("Batch 1")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "aws-batch-2",
                            value: "batch-2"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "aws-batch-2",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 2`);
                              } else {
                                return [
                                  createTextVNode("Batch 2")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center space-x-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$e), {
                            id: "aws-batch-3",
                            value: "batch-3"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$c), {
                            for: "aws-batch-3",
                            class: "text-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Batch 3`);
                              } else {
                                return [
                                  createTextVNode("Batch 3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-batch-1",
                                value: "batch-1"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-batch-1",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 1")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-batch-2",
                                value: "batch-2"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-batch-2",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 2")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-batch-3",
                                value: "batch-3"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-batch-3",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 3")
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(form).errors.awsBatch) {
                      _push3(`<p class="text-sm text-destructive"${_scopeId2}>${ssrInterpolate(unref(form).errors.awsBatch)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(awsLogoUrl),
                              alt: "AWS Logo",
                              class: "w-8 h-6"
                            }, null, 8, ["src"]),
                            createVNode("span", null, "AWS Foundational Certificate")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          type: "single",
                          collapsible: "",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3), { value: "description" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pengenalan Program ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Asas & Lanjutan AWS:"),
                                        createTextVNode(" Pengenalan mendalam AWS, seni bina awan, keselamatan dan servis teras. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Kemahiran Hands-On AWS:"),
                                        createTextVNode(" Sediakan dan urus infrastruktur awan, laksana amalan keselamatan terbaik, serta penggunaan DevOps. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Automasi & DevOps:"),
                                        createTextVNode(" Infrastructure as Code, CI/CD pipeline & automasi cloud. ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Persediaan Pensijilan:"),
                                        createTextVNode(" Latihan projek sebenar dan strategi peperiksaan AWS Cloud Practitioner & Solutions Architect. ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rangka Kursus (4 Minggu) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 1:"),
                                        createTextVNode(" Pengenalan AWS, Asas Cloud & Servis Teras ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 2:"),
                                        createTextVNode(" Seni Bina AWS, Amalan Keselamatan & Pengurusan Identiti ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 3:"),
                                        createTextVNode(" Automasi, DevOps & Deployment Cloud Sebenar ")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "Minggu 4:"),
                                        createTextVNode(" Projek Capstone Cloud, Latihan Persijilan & Persediaan Kerjaya ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-5" }, [
                          createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                            default: withCtx(() => [
                              createTextVNode(" Intake Batch "),
                              createVNode("span", { class: "text-destructive" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$f), {
                            modelValue: unref(form).awsBatch,
                            "onUpdate:modelValue": ($event) => unref(form).awsBatch = $event,
                            class: "space-y-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "aws-batch-1",
                                  value: "batch-1"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "aws-batch-1",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 1")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "aws-batch-2",
                                  value: "batch-2"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "aws-batch-2",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 2")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode(unref(_sfc_main$e), {
                                  id: "aws-batch-3",
                                  value: "batch-3"
                                }),
                                createVNode(unref(_sfc_main$c), {
                                  for: "aws-batch-3",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Batch 3")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.awsBatch ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm text-destructive"
                          }, toDisplayString(unref(form).errors.awsBatch), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode(unref(_sfc_main$6), { class: "text-card-foreground flex items-center space-x-2" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(awsLogoUrl),
                            alt: "AWS Logo",
                            class: "w-8 h-6"
                          }, null, 8, ["src"]),
                          createVNode("span", null, "AWS Foundational Certificate")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), {
                        type: "single",
                        collapsible: "",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { value: "description" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pengenalan Program ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), { class: "text-muted-foreground" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing tinggi. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "what-you-get" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Apa Yang Anda Akan Perolehi ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Asas & Lanjutan AWS:"),
                                      createTextVNode(" Pengenalan mendalam AWS, seni bina awan, keselamatan dan servis teras. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Kemahiran Hands-On AWS:"),
                                      createTextVNode(" Sediakan dan urus infrastruktur awan, laksana amalan keselamatan terbaik, serta penggunaan DevOps. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Automasi & DevOps:"),
                                      createTextVNode(" Infrastructure as Code, CI/CD pipeline & automasi cloud. ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Persediaan Pensijilan:"),
                                      createTextVNode(" Latihan projek sebenar dan strategi peperiksaan AWS Cloud Practitioner & Solutions Architect. ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), { value: "course-outline" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), { class: "text-left text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rangka Kursus (4 Minggu) ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-3 text-muted-foreground" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 1:"),
                                      createTextVNode(" Pengenalan AWS, Asas Cloud & Servis Teras ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 2:"),
                                      createTextVNode(" Seni Bina AWS, Amalan Keselamatan & Pengurusan Identiti ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 3:"),
                                      createTextVNode(" Automasi, DevOps & Deployment Cloud Sebenar ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "Minggu 4:"),
                                      createTextVNode(" Projek Capstone Cloud, Latihan Persijilan & Persediaan Kerjaya ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5" }, [
                        createVNode(unref(_sfc_main$6), { class: "text-card-foreground" }, {
                          default: withCtx(() => [
                            createTextVNode(" Intake Batch "),
                            createVNode("span", { class: "text-destructive" }, "*")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$f), {
                          modelValue: unref(form).awsBatch,
                          "onUpdate:modelValue": ($event) => unref(form).awsBatch = $event,
                          class: "space-y-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-batch-1",
                                value: "batch-1"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-batch-1",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 1")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-batch-2",
                                value: "batch-2"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-batch-2",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 2")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode(unref(_sfc_main$e), {
                                id: "aws-batch-3",
                                value: "batch-3"
                              }),
                              createVNode(unref(_sfc_main$c), {
                                for: "aws-batch-3",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Batch 3")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(form).errors.awsBatch ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm text-destructive"
                        }, toDisplayString(unref(form).errors.awsBatch), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "text-card-foreground" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pertanyaan Lanjut `);
          } else {
            return [
              createTextVNode(" Pertanyaan Lanjut ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), {
        modelValue: unref(form).furtherInquiries,
        "onUpdate:modelValue": ($event) => unref(form).furtherInquiries = $event,
        placeholder: "Sebarang soalan atau maklumat tambahan yang anda ingin kongsikan (optional)",
        class: "w-full min-h-[100px]"
      }, null, _parent));
      if (unref(form).errors.furtherInquiries) {
        _push(`<p class="text-sm text-destructive">${ssrInterpolate(unref(form).errors.furtherInquiries)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$m), {
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
                      createVNode(unref(_sfc_main$m), {
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
              createVNode(unref(_sfc_main$8), { class: "p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(unref(_sfc_main$m), {
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
