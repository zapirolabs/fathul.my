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
      _push(`<div class="bg-card border border-border rounded-lg p-6 mb-8 text-left"><h2 class="text-xl font-semibold text-card-foreground mb-4">Apa yang akan berlaku seterusnya?</h2><ul class="space-y-3 text-muted-foreground"><li class="flex items-start"><span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span><span>Pasukan kami akan meneliti permohonan anda.</span></li><li class="flex items-start"><span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span><span>Anda akan dihubungi melalui telefon atau email untuk pengesahan</span></li><li class="flex items-start"><span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span><span>Maklumat lengkap mengenai tarikh mula program akan dimaklumkan.</span></li></ul></div><div class="space-y-4">`);
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
      _push(`<p class="text-sm text-muted-foreground"> Sebarang pertanyaan? Hubungi saya di <a href="https://wa.me/60111205317" target="_blank" class="text-[#941e20] hover:underline inline-flex items-center"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg> WhatsApp: 011-1205317 (Fathul) </a></p></div></div></div></div>`);
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
