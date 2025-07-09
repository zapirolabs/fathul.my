import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./index-CBusBGn5.js";
import "class-variance-authority";
import "reka-ui";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Success",
  __ssrInlineRender: true,
  props: {
    referralCodes: {
      type: Array,
      default: () => []
    },
    userName: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background flex items-center justify-center" }, _attrs))}><div class="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center"><div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6"><svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><h1 class="text-3xl font-bold text-card-foreground mb-4"> Permohonan Berjaya Dihantar! </h1><p class="text-lg text-muted-foreground mb-4"> Terima kasih ${ssrInterpolate(__props.userName)} kerana memohon Program Jaminan Kerjaya 2025. Maklumat anda telah berjaya direkodkan dan pasukan kami akan menghubungi anda tidak lama lagi. </p>`);
      if (__props.referralCodes.length > 0) {
        _push(`<div class="bg-card border border-border rounded-lg p-6 mb-8"><h2 class="text-xl font-semibold text-card-foreground mb-4">Kod Rujukan Anda</h2><p class="text-sm text-muted-foreground mb-4"> Simpan kod rujukan ini untuk rujukan masa hadapan: </p><div class="space-y-3"><!--[-->`);
        ssrRenderList(__props.referralCodes, (referral) => {
          _push(`<div class="flex items-center justify-between bg-muted p-3 rounded-lg"><div class="text-left"><p class="font-medium text-card-foreground">${ssrInterpolate(referral.program)}</p><p class="text-sm text-muted-foreground">Kod Rujukan</p></div><div class="text-right"><p class="font-mono text-lg font-bold text-[#941e20]">${ssrInterpolate(referral.code)}</p><button class="text-xs text-muted-foreground hover:text-card-foreground"> Salin </button></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-card border border-border rounded-lg p-6 mb-8 text-left"><h2 class="text-xl font-semibold text-card-foreground mb-4">Apa yang akan berlaku seterusnya?</h2><ul class="space-y-3 text-muted-foreground"><li class="flex items-start"><span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span><span>Pasukan kami akan meneliti permohonan anda dalam tempoh 3-5 hari bekerja</span></li><li class="flex items-start"><span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span><span>Anda akan dihubungi melalui telefon atau email untuk pengesahan</span></li><li class="flex items-start"><span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span><span>Maklumat lengkap mengenai tarikh mula program akan dimaklumkan</span></li></ul></div><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        onClick: ($event) => _ctx.$inertia.visit("/"),
        class: "w-full bg-[#941e20] hover:bg-[#7a1a1c] text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kembali ke Borang `);
          } else {
            return [
              createTextVNode(" Kembali ke Borang ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-muted-foreground"> Sebarang pertanyaan? Hubungi kami di <a href="mailto:info@ypadvancedskills.com" class="text-[#941e20] hover:underline"> info@ypadvancedskills.com </a></p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
