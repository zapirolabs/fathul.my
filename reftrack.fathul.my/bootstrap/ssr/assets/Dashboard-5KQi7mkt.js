import { useSSRContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { ShieldCheck, MapPin, Calendar, Users, GraduationCap, Briefcase, Home, Banknote, Building2, BookOpen, Code, Brain, Cloud, Info, Clock, Monitor, Package, CheckCircle, AlertTriangle, Send } from "lucide-vue-next";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Banner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white" }, _attrs))} data-v-1da9ed77><div class="absolute inset-0 opacity-10" data-v-1da9ed77><div class="absolute inset-0 bg-dot-pattern animate-pulse" data-v-1da9ed77></div></div><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" data-v-1da9ed77><div class="text-center" data-v-1da9ed77><div class="mb-8 animate-fade-in-up" data-v-1da9ed77><img src="https://cdn.fathul.my/assets/logo/ypadvancedskills-logo-whiteondark.svg" alt="YPAdvancedSkills Logo" class="h-16 mx-auto" data-v-1da9ed77></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200" data-v-1da9ed77><span class="block text-white" data-v-1da9ed77>Program</span><span class="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent animate-gradient-x" data-v-1da9ed77> Jaminan Kerjaya </span><span class="block text-white" data-v-1da9ed77>2025</span></h1></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProgramHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1da9ed77"]]);
const _sfc_main$5 = {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/KriteriaPemohon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ApaYangAndaPerolehi.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProgramYangDitawarkan",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Program Yang Ditawarkan &amp; Tempoh Program </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Kami kini menawarkan program-program berikut </p></div><div class="grid gap-8 lg:grid-cols-2"><div class="space-y-8"><div><h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "w-6 h-6 text-amber-500 mr-3" }, null, _parent));
      _push(` Program Yang Tersedia </h3><div class="space-y-4"><div class="flex items-start p-4 bg-gray-50 rounded-lg">`);
      _push(ssrRenderComponent(unref(Code), { class: "w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700 font-medium">Python Basic Programming</span></div><div class="flex items-start p-4 bg-gray-50 rounded-lg">`);
      _push(ssrRenderComponent(unref(Brain), { class: "w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700 font-medium">GenAI Masterclass</span></div><div class="flex items-start p-4 bg-gray-50 rounded-lg">`);
      _push(ssrRenderComponent(unref(Cloud), { class: "w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700 font-medium">AWS Foundational Certificate</span></div></div><div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-blue-600 mr-2" }, null, _parent));
      _push(`<p class="text-blue-800 font-medium"> Kami akan mengumumkan tarikh yang disahkan dalam masa terdekat </p></div></div></div></div><div class="space-y-8"><div><h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-amber-500 mr-3" }, null, _parent));
      _push(` Komitmen Yang Diperlukan </h3><div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-amber-600 mr-2" }, null, _parent));
      _push(`<span class="text-amber-800 font-semibold text-lg">1 Bulan</span></div></div><div class="space-y-4"><div class="border border-gray-200 rounded-lg p-4"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-green-600 mr-2" }, null, _parent));
      _push(`<span class="font-semibold text-gray-900">Minggu 1–3: Kelas Fizikal</span></div><p class="text-gray-600 text-sm ml-7">Kehadiran sepenuh masa diperlukan</p></div><div class="border border-gray-200 rounded-lg p-4"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(unref(Monitor), { class: "w-5 h-5 text-blue-600 mr-2" }, null, _parent));
      _push(`<span class="font-semibold text-gray-900">Minggu 4: Kelas Dalam Talian</span></div><p class="text-gray-600 text-sm ml-7">Kehadiran sepenuh masa diperlukan</p></div></div></div><div><h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">`);
      _push(ssrRenderComponent(unref(Package), { class: "w-5 h-5 text-amber-500 mr-2" }, null, _parent));
      _push(` Program Termasuk </h4><ul class="space-y-3"><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Latihan fizikal di YP Advanced Skills, Kuantan</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Modul pembelajaran dalam talian dan pensijilan</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-700">Penilaian akhir, bimbingan, dan proses penempatan kerja</span></li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ProgramYangDitawarkan.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SiapaPatutMemohon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 sm:py-20" }, _attrs))}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> Siapa Patut Memohon? </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Program ini direka khas untuk </p></div><div class="space-y-8 mb-12"><div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6"><div class="flex items-start"><div class="flex-shrink-0"><div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</div></div><div class="ml-4"><h3 class="text-xl font-semibold text-gray-900 mb-2"> Graduan Baharu </h3><p class="text-gray-700 leading-relaxed"> Graduan baharu yang mencari pekerjaan dalam bidang teknologi/kejuruteraan atau hanya perlu meningkatkan kemahiran mereka </p></div></div></div><div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6"><div class="flex items-start"><div class="flex-shrink-0"><div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(Briefcase), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</div></div><div class="ml-4"><h3 class="text-xl font-semibold text-gray-900 mb-2"> Graduan Yang Sudah Ada Tawaran Kerja </h3><p class="text-gray-700 leading-relaxed"> Graduan yang sudah mempunyai tawaran kerja tetapi memerlukan sokongan untuk memulakan dengan kukuh melalui <span class="font-semibold text-green-700">Pensijilan Industri dan Kesediaan Kerja</span></p></div></div></div></div><div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg"><div class="flex items-start">`);
      _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<div><h4 class="text-lg font-semibold text-amber-800 mb-2"> Tempat Terhad Sahaja! </h4><p class="text-amber-700 mb-4"> Hanya tempat terhad sahaja tersedia. Mohon sekarang untuk menempah tempat anda dan dijemput ke taklimat program dan pemilihan calon kami. </p><div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-red-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(Send), { class: "w-5 h-5 mr-2" }, null, _parent));
      _push(` Mohon Sekarang </div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SiapaPatutMemohon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProgramForm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(ProgramHeader, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
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
