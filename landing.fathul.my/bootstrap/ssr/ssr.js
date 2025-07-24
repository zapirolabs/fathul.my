import { unref, mergeProps, withCtx, renderSlot, useSSRContext, createVNode, createTextVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, toDisplayString, ref, computed, renderList, createCommentVNode, createSSRApp, h as h$1 } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Link, router, usePage, Head, createInertiaApp } from "@inertiajs/vue3";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useForwardPropsEmits, DialogRoot, DialogOverlay, DialogPortal, DialogContent, DialogClose, DialogDescription, DialogTitle, DialogTrigger, createContext, TooltipRoot, TooltipPortal, TooltipContent, TooltipArrow, TooltipProvider, TooltipTrigger, Primitive, AvatarRoot, AvatarFallback, AvatarImage, DropdownMenuRoot, DropdownMenuPortal, DropdownMenuContent, DropdownMenuGroup, useForwardProps, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, NavigationMenuViewport, NavigationMenuRoot, NavigationMenuItem, NavigationMenuList } from "reka-ui";
import { reactiveOmit, useMediaQuery, useVModel, useEventListener } from "@vueuse/core";
import { X, ChevronRight, Settings, LogOut, LayoutGrid, HandHeart, Landmark, Wallet, User, Folder, BookOpen, Menu, Search, Code, Wrench } from "lucide-vue-next";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$O = {
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps({ "data-slot": "sheet" }, unref(forwarded), _attrs), {
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
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/Sheet.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = {
  __name: "SheetOverlay",
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
      _push(ssrRenderComponent(unref(DialogOverlay), mergeProps({
        "data-slot": "sheet-overlay",
        class: unref(cn)(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
          props.class
        )
      }, unref(delegatedProps), _attrs), {
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
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetOverlay.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    side: { type: String, required: false, default: "right" },
    forceMount: { type: Boolean, required: false },
    trapFocus: { type: Boolean, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class", "side");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$N, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              "data-slot": "sheet-content",
              class: unref(cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                __props.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                __props.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                __props.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                __props.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                props.class
              )
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(X), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$N),
              createVNode(unref(DialogContent), mergeProps({
                "data-slot": "sheet-content",
                class: unref(cn)(
                  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                  __props.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                  __props.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                  __props.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                  __props.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                  props.class
                )
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
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
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetContent.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = {
  __name: "SheetDescription",
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
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps({
        "data-slot": "sheet-description",
        class: unref(cn)("text-muted-foreground text-sm", props.class)
      }, unref(delegatedProps), _attrs), {
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
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetDescription.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = {
  __name: "SheetHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sheet-header",
        class: unref(cn)("flex flex-col gap-1.5 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetHeader.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "SheetTitle",
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
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps({
        "data-slot": "sheet-title",
        class: unref(cn)("text-foreground font-semibold", props.class)
      }, unref(delegatedProps), _attrs), {
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
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetTitle.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "SheetTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps({ "data-slot": "sheet-trigger" }, props, _attrs), {
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
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const [useSidebar, provideSidebarContext] = createContext("Sidebar");
const _sfc_main$H = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    side: { type: String, required: false, default: "left" },
    variant: { type: String, required: false, default: "sidebar" },
    collapsible: { type: String, required: false, default: "offcanvas" },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.collapsible === "none") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          "data-slot": "sidebar",
          class: unref(cn)(
            "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
            props.class
          )
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(isMobile)) {
        _push(ssrRenderComponent(unref(_sfc_main$O), mergeProps({ open: unref(openMobile) }, _ctx.$attrs, { "onUpdate:open": unref(setOpenMobile) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$M), {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                side: __props.side,
                class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$K, { class: "sr-only" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$J, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Sidebar`);
                              } else {
                                return [
                                  createTextVNode("Sidebar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$L, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Displays the mobile sidebar.`);
                              } else {
                                return [
                                  createTextVNode("Displays the mobile sidebar.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$J, null, {
                              default: withCtx(() => [
                                createTextVNode("Sidebar")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$L, null, {
                              default: withCtx(() => [
                                createTextVNode("Displays the mobile sidebar.")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex h-full w-full flex-col"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$K, { class: "sr-only" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$J, null, {
                            default: withCtx(() => [
                              createTextVNode("Sidebar")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$L, null, {
                            default: withCtx(() => [
                              createTextVNode("Displays the mobile sidebar.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex h-full w-full flex-col" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$M), {
                  "data-sidebar": "sidebar",
                  "data-slot": "sidebar",
                  "data-mobile": "true",
                  side: __props.side,
                  class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                  style: {
                    "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$K, { class: "sr-only" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$J, null, {
                          default: withCtx(() => [
                            createTextVNode("Sidebar")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$L, null, {
                          default: withCtx(() => [
                            createTextVNode("Displays the mobile sidebar.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex h-full w-full flex-col" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                }, 8, ["side", "style"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "group peer text-sidebar-foreground hidden md:block",
          "data-slot": "sidebar",
          "data-state": unref(state),
          "data-collapsible": unref(state) === "collapsed" ? __props.collapsible : "",
          "data-variant": __props.variant,
          "data-side": __props.side
        }, _attrs))}><div class="${ssrRenderClass(
          unref(cn)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            __props.variant === "floating" || __props.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )}"></div><div${ssrRenderAttrs(mergeProps({
          class: unref(cn)(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            __props.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            __props.variant === "floating" || __props.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            props.class
          )
        }, _ctx.$attrs))}><div data-sidebar="sidebar" class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/Sidebar.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = {
  __name: "SidebarInset",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-inset",
        class: unref(cn)(
          "bg-background relative flex w-full flex-1 flex-col",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarInset.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    delayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps({ "data-slot": "tooltip" }, unref(forwarded), _attrs), {
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
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    ariaLabel: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    class: { type: null, required: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(TooltipArrow), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(TooltipArrow), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(TooltipArrow), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
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
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: { type: Number, required: false, default: 0 },
    skipDelayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
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
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    reference: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps({ "data-slot": "tooltip-trigger" }, props, _attrs), {
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
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {
  __name: "SidebarMenuButtonChild",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false, default: "default" },
    size: { type: null, required: false, default: "default" },
    isActive: { type: Boolean, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false, default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": __props.size,
        "data-active": __props.isActive,
        class: unref(cn)(unref(sidebarMenuButtonVariants)({ variant: __props.variant, size: __props.size }), props.class),
        as: __props.as,
        "as-child": __props.asChild
      }, _ctx.$attrs, _attrs), {
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
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuButtonChild.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "SidebarMenuButton",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false, default: "default" },
    size: { type: null, required: false, default: "default" },
    isActive: { type: Boolean, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false, default: "button" },
    tooltip: { type: [String, Object, Function], required: false }
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state } = useSidebar();
    const delegatedProps = reactiveOmit(props, "tooltip");
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.tooltip) {
        _push(ssrRenderComponent(_sfc_main$B, mergeProps({ ...unref(delegatedProps), ..._ctx.$attrs }, _attrs), {
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
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$F), _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$C), { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$B, { ...unref(delegatedProps), ..._ctx.$attrs }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$B, { ...unref(delegatedProps), ..._ctx.$attrs }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 16)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$E), {
                side: "right",
                align: "center",
                hidden: unref(state) !== "collapsed" || unref(isMobile)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof __props.tooltip === "string") {
                      _push3(`<!--[-->${ssrInterpolate(__props.tooltip)}<!--]-->`);
                    } else {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(__props.tooltip), null, null), _parent3, _scopeId2);
                    }
                  } else {
                    return [
                      typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(__props.tooltip), 1)
                      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$C), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$B, { ...unref(delegatedProps), ..._ctx.$attrs }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }),
                createVNode(unref(_sfc_main$E), {
                  side: "right",
                  align: "center",
                  hidden: unref(state) !== "collapsed" || unref(isMobile)
                }, {
                  default: withCtx(() => [
                    typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(__props.tooltip), 1)
                    ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["hidden"])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarMenuButton.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __name: "SidebarProvider",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false, default: void 0 },
    class: { type: null, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const openMobile = ref(false);
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen ?? false,
      passive: props.open === void 0
    });
    function setOpen(value) {
      open.value = value;
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
    function setOpenMobile(value) {
      openMobile.value = value;
    }
    function toggleSidebar() {
      return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
    }
    useEventListener("keydown", (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    });
    const state = computed(() => open.value ? "expanded" : "collapsed");
    provideSidebarContext({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps({ "delay-duration": 0 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              "data-slot": "sidebar-wrapper",
              style: {
                "--sidebar-width": unref(SIDEBAR_WIDTH),
                "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
              },
              class: unref(cn)(
                "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
                props.class
              )
            }, _ctx.$attrs))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", mergeProps({
                "data-slot": "sidebar-wrapper",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH),
                  "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
                },
                class: unref(cn)(
                  "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
                  props.class
                )
              }, _ctx.$attrs), [
                renderSlot(_ctx.$slots, "default")
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sidebar/SidebarProvider.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "button",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
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
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/button/Button.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$x = {
  __name: "AppContent",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: void 0
    },
    class: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => props.class);
    return (_ctx, _push, _parent, _attrs) => {
      if (props.variant === "sidebar") {
        _push(ssrRenderComponent(unref(_sfc_main$G), mergeProps({ class: className.value }, _attrs), {
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
      } else {
        _push(`<main${ssrRenderAttrs(mergeProps({
          class: ["mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl", className.value]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</main>`);
      }
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppContent.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AppLogoIcon",
  __ssrInlineRender: true,
  props: {
    className: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 40 42",
        class: __props.className
      }, _ctx.$attrs, _attrs))}><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.2 5.633 8.6.855 0 5.633v26.51l16.2 9 16.2-9v-8.442l7.6-4.223V9.856l-8.6-4.777-8.6 4.777V18.3l-5.6 3.111V5.633ZM38 18.301l-5.6 3.11v-6.157l5.6-3.11V18.3Zm-1.06-7.856-5.54 3.078-5.54-3.079 5.54-3.078 5.54 3.079ZM24.8 18.3v-6.157l5.6 3.111v6.158L24.8 18.3Zm-1 1.732 5.54 3.078-13.14 7.302-5.54-3.078 13.14-7.3v-.002Zm-16.2 7.89 7.6 4.222V38.3L2 30.966V7.92l5.6 3.111v16.892ZM8.6 9.3 3.06 6.222 8.6 3.143l5.54 3.08L8.6 9.3Zm21.8 15.51-13.2 7.334V38.3l13.2-7.334v-6.156ZM9.6 11.034l5.6-3.11v14.6l-5.6 3.11v-14.6Z"></path></svg>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLogoIcon.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = {
  __name: "AppLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">`);
      _push(ssrRenderComponent(_sfc_main$w, { class: "size-5 fill-current text-white dark:text-black" }, null, _parent));
      _push(`</div><div class="ml-1 grid flex-1 text-left text-sm"><span class="mb-0.5 truncate font-semibold leading-none">Laravel Starter Kit</span></div><!--]-->`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLogo.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        class: props.class
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/Breadcrumb.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
  __name: "BreadcrumbItem",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-item",
        class: unref(cn)("inline-flex items-center gap-1.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbItem.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
  __name: "BreadcrumbLink",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false, default: "a" },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "breadcrumb-link",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)("hover:text-foreground transition-colors", props.class)
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
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbLink.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __name: "BreadcrumbList",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ol${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-list",
        class: unref(cn)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ol>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbList.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
  __name: "BreadcrumbPage",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        class: unref(cn)("text-foreground font-normal", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbPage.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "BreadcrumbSeparator",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        class: unref(cn)("[&>svg]:size-3.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(unref(ChevronRight), null, null, _parent));
      }, _push, _parent);
      _push(`</li>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/breadcrumb/BreadcrumbSeparator.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$u), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$r), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.breadcrumbs, (item, index) => {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$t), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (index === __props.breadcrumbs.length - 1) {
                            _push4(ssrRenderComponent(unref(_sfc_main$q), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(unref(_sfc_main$s), { "as-child": "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Link), {
                                    href: item.href ?? "#"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(Link), {
                                      href: item.href ?? "#"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            index === __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$q), { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$s), {
                              key: 1,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: item.href ?? "#"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              _: 2
                            }, 1024))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (index !== __props.breadcrumbs.length - 1) {
                      _push3(ssrRenderComponent(unref(_sfc_main$p), null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.breadcrumbs, (item, index) => {
                      return openBlock(), createBlock(Fragment, { key: index }, [
                        createVNode(unref(_sfc_main$t), null, {
                          default: withCtx(() => [
                            index === __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$q), { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$s), {
                              key: 1,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: item.href ?? "#"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              _: 2
                            }, 1024))
                          ]),
                          _: 2
                        }, 1024),
                        index !== __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$p), { key: 0 })) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$r), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.breadcrumbs, (item, index) => {
                    return openBlock(), createBlock(Fragment, { key: index }, [
                      createVNode(unref(_sfc_main$t), null, {
                        default: withCtx(() => [
                          index === __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$q), { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$s), {
                            key: 1,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Link), {
                                href: item.href ?? "#"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            _: 2
                          }, 1024))
                        ]),
                        _: 2
                      }, 1024),
                      index !== __props.breadcrumbs.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$p), { key: 0 })) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
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
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Breadcrumbs.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
function getInitials(fullName) {
  if (!fullName) return "";
  const names = fullName.trim().split(" ");
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
}
function useInitials() {
  return { getInitials };
}
const _sfc_main$n = {
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        "data-slot": "avatar",
        class: unref(cn)(
          "relative flex size-8 shrink-0 overflow-hidden rounded-full",
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/Avatar.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "AvatarFallback",
  __ssrInlineRender: true,
  props: {
    delayMs: { type: Number, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarFallback), mergeProps({ "data-slot": "avatar-fallback" }, unref(delegatedProps), {
        class: unref(cn)(
          "bg-muted flex size-full items-center justify-center rounded-full",
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
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/AvatarFallback.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "AvatarImage",
  __ssrInlineRender: true,
  props: {
    src: { type: String, required: true },
    referrerPolicy: { type: null, required: false },
    crossOrigin: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarImage), mergeProps({ "data-slot": "avatar-image" }, props, { class: "aspect-square size-full" }, _attrs), {
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
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/avatar/AvatarImage.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "UserInfo",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: false,
      default: void 0
    },
    showEmail: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const fakeUser = {
      name: "John Doe",
      email: "john@example.com",
      avatar: ""
    };
    const user = computed(() => props.user || fakeUser);
    const { getInitials: getInitials2 } = useInitials();
    const showAvatar = computed(() => user.value.avatar && user.value.avatar !== "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$n), { class: "h-8 w-8 overflow-hidden rounded-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (showAvatar.value) {
              _push2(ssrRenderComponent(unref(_sfc_main$l), {
                src: user.value.avatar,
                alt: user.value.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$m), { class: "rounded-lg text-black dark:text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(getInitials2)(user.value.name))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(getInitials2)(user.value.name)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              showAvatar.value ? (openBlock(), createBlock(unref(_sfc_main$l), {
                key: 0,
                src: user.value.avatar,
                alt: user.value.name
              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$m), { class: "rounded-lg text-black dark:text-white" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(getInitials2)(user.value.name)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid flex-1 text-left text-sm leading-tight"><span class="truncate font-medium">${ssrInterpolate(user.value.name)}</span>`);
      if (__props.showEmail) {
        _push(`<span class="truncate text-xs text-muted-foreground">${ssrInterpolate(user.value.email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/UserInfo.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    dir: { type: String, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps({ "data-slot": "dropdown-menu" }, unref(forwarded), _attrs), {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    loop: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    disableUpdateOnLayoutShift: { type: Boolean, required: false },
    prioritizePosition: { type: Boolean, required: false },
    reference: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, unref(forwarded), {
              class: unref(cn)(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, unref(forwarded), {
                class: unref(cn)(
                  "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "DropdownMenuGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuGroup), mergeProps({ "data-slot": "dropdown-menu-group" }, props, _attrs), {
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuGroup.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    textValue: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false },
    inset: { type: Boolean, required: false },
    variant: { type: String, required: false, default: "default" }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "inset", "variant", "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps({
        "data-slot": "dropdown-menu-item",
        "data-inset": __props.inset ? "" : void 0,
        "data-variant": __props.variant
      }, unref(forwardedProps), {
        class: unref(cn)(
          `focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false },
    inset: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "inset");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps({
        "data-slot": "dropdown-menu-label",
        "data-inset": __props.inset ? "" : void 0
      }, unref(forwardedProps), {
        class: unref(cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", props.class)
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "DropdownMenuSeparator",
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
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps({ "data-slot": "dropdown-menu-separator" }, unref(delegatedProps), {
        class: unref(cn)("bg-border -mx-1 my-1 h-px", props.class)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false }
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ "data-slot": "dropdown-menu-trigger" }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "UserMenuContent",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const fakeUser = {
      name: "John Doe",
      email: "john@example.com",
      avatar: ""
    };
    const user = props.user || fakeUser;
    const handleLogout = () => {
      router.flushAll();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$f), { class: "p-0 font-normal" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, {
              user: unref(user),
              "show-email": true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                createVNode(_sfc_main$k, {
                  user: unref(user),
                  "show-email": true
                }, null, 8, ["user"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$h), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$g), { "as-child": true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "block w-full",
                    href: _ctx.route("profile.edit"),
                    prefetch: "",
                    as: "button"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Settings), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        _push4(` Settings `);
                      } else {
                        return [
                          createVNode(unref(Settings), { class: "mr-2 h-4 w-4" }),
                          createTextVNode(" Settings ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      class: "block w-full",
                      href: _ctx.route("profile.edit"),
                      prefetch: "",
                      as: "button"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Settings), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" Settings ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$g), { "as-child": true }, {
                default: withCtx(() => [
                  createVNode(unref(Link), {
                    class: "block w-full",
                    href: _ctx.route("profile.edit"),
                    prefetch: "",
                    as: "button"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Settings), { class: "mr-2 h-4 w-4" }),
                      createTextVNode(" Settings ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$g), { "as-child": true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), {
              class: "block w-full",
              method: "post",
              href: _ctx.route("logout"),
              onClick: handleLogout,
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LogOut), { class: "mr-2 h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(` Log out `);
                } else {
                  return [
                    createVNode(unref(LogOut), { class: "mr-2 h-4 w-4" }),
                    createTextVNode(" Log out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), {
                class: "block w-full",
                method: "post",
                href: _ctx.route("logout"),
                onClick: handleLogout,
                as: "button"
              }, {
                default: withCtx(() => [
                  createVNode(unref(LogOut), { class: "mr-2 h-4 w-4" }),
                  createTextVNode(" Log out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/UserMenuContent.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
function useMainNavItems() {
  return [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutGrid
    },
    {
      title: "Maklumat Zakat",
      href: "/maklumat-zakat",
      icon: HandHeart
    },
    {
      title: "Maklumat Wakaf",
      href: "/maklumat-wakaf",
      icon: Landmark
    },
    {
      title: "Potongan Gaji",
      href: "/potongan-gaji",
      icon: Wallet
    },
    {
      title: "Akaun Anda",
      href: "/akaun-anda",
      icon: User
    }
  ];
}
function useExternalNavItems() {
  return [
    {
      title: "Github Repo",
      href: "https://github.com/laravel/vue-starter-kit",
      icon: Folder
    },
    {
      title: "Documentation",
      href: "https://laravel.com/docs/starter-kits#vue",
      icon: BookOpen
    }
  ];
}
const _sfc_main$b = {
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    align: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-full left-0 isolate z-50 flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps({ "data-slot": "navigation-menu-viewport" }, unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    dir: { type: String, required: false },
    orientation: { type: String, required: false },
    delayDuration: { type: Number, required: false },
    skipDelayDuration: { type: Number, required: false },
    disableClickTrigger: { type: Boolean, required: false },
    disableHoverTrigger: { type: Boolean, required: false },
    disablePointerLeaveClose: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false },
    viewport: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class", "viewport");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps({
        "data-slot": "navigation-menu",
        "data-viewport": __props.viewport
      }, unref(forwarded), {
        class: unref(cn)(
          "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (__props.viewport) {
              _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              __props.viewport ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps({ "data-slot": "navigation-menu-item" }, unref(delegatedProps), {
        class: unref(cn)("relative", props.class)
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "NavigationMenuList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: [String, Object, Function], required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps({ "data-slot": "navigation-menu-list" }, unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-1",
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
const _sfc_main$7 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const auth = computed(() => page.props.auth);
    const fakeUser = {
      name: "John Doe",
      email: "john@example.com",
      avatar: ""
    };
    const user = computed(() => {
      return auth.value && auth.value.user ? auth.value.user : fakeUser;
    });
    const isCurrentRoute = computed(() => (url) => page.url === url);
    const activeItemStyles = computed(
      () => (url) => isCurrentRoute.value(url) ? "text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100" : ""
    );
    const mainNavItems = useMainNavItems();
    const rightNavItems = useExternalNavItems();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="border-b border-sidebar-border/80"><div class="mx-auto flex h-16 items-center px-4 md:max-w-7xl"><div class="lg:hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$O), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$I), { "as-child": true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$y), {
                    variant: "ghost",
                    size: "icon",
                    class: "mr-2 h-9 w-9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Menu), { class: "h-5 w-5" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Menu), { class: "h-5 w-5" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$y), {
                      variant: "ghost",
                      size: "icon",
                      class: "mr-2 h-9 w-9"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Menu), { class: "h-5 w-5" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$M), {
              side: "left",
              class: "w-[300px] p-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$J), { class: "sr-only" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Navigation Menu`);
                      } else {
                        return [
                          createTextVNode("Navigation Menu")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$K), { class: "flex justify-start text-left" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$w, { class: "size-6 fill-current text-black dark:text-white" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$w, { class: "size-6 fill-current text-black dark:text-white" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex h-full flex-1 flex-col justify-between space-y-4 py-6"${_scopeId2}><nav class="-mx-3 space-y-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(mainNavItems), (item) => {
                    _push3(ssrRenderComponent(unref(Link), {
                      key: item.title,
                      href: item.href,
                      class: ["flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent", activeItemStyles.value(item.href)]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.icon) {
                            ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(item.icon), { class: "h-5 w-5" }, null), _parent4, _scopeId3);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(` ${ssrInterpolate(item.title)}`);
                        } else {
                          return [
                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                              key: 0,
                              class: "h-5 w-5"
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></nav><div class="flex flex-col space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(rightNavItems), (item) => {
                    _push3(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-sm font-medium"${_scopeId2}>`);
                    if (item.icon) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), { class: "h-5 w-5" }, null), _parent3, _scopeId2);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item.title)}</span></a>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$J), { class: "sr-only" }, {
                      default: withCtx(() => [
                        createTextVNode("Navigation Menu")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$K), { class: "flex justify-start text-left" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$w, { class: "size-6 fill-current text-black dark:text-white" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex h-full flex-1 flex-col justify-between space-y-4 py-6" }, [
                      createVNode("nav", { class: "-mx-3 space-y-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(mainNavItems), (item) => {
                          return openBlock(), createBlock(unref(Link), {
                            key: item.title,
                            href: item.href,
                            class: ["flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent", activeItemStyles.value(item.href)]
                          }, {
                            default: withCtx(() => [
                              item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                key: 0,
                                class: "h-5 w-5"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["href", "class"]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex flex-col space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(rightNavItems), (item) => {
                          return openBlock(), createBlock("a", {
                            key: item.title,
                            href: item.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "flex items-center space-x-2 text-sm font-medium"
                          }, [
                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                              key: 0,
                              class: "h-5 w-5"
                            })) : createCommentVNode("", true),
                            createVNode("span", null, toDisplayString(item.title), 1)
                          ], 8, ["href"]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$I), { "as-child": true }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$y), {
                    variant: "ghost",
                    size: "icon",
                    class: "mr-2 h-9 w-9"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Menu), { class: "h-5 w-5" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$M), {
                side: "left",
                class: "w-[300px] p-6"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$J), { class: "sr-only" }, {
                    default: withCtx(() => [
                      createTextVNode("Navigation Menu")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$K), { class: "flex justify-start text-left" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$w, { class: "size-6 fill-current text-black dark:text-white" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex h-full flex-1 flex-col justify-between space-y-4 py-6" }, [
                    createVNode("nav", { class: "-mx-3 space-y-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(mainNavItems), (item) => {
                        return openBlock(), createBlock(unref(Link), {
                          key: item.title,
                          href: item.href,
                          class: ["flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent", activeItemStyles.value(item.href)]
                        }, {
                          default: withCtx(() => [
                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                              key: 0,
                              class: "h-5 w-5"
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "class"]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex flex-col space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(rightNavItems), (item) => {
                        return openBlock(), createBlock("a", {
                          key: item.title,
                          href: item.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "flex items-center space-x-2 text-sm font-medium"
                        }, [
                          item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                            key: 0,
                            class: "h-5 w-5"
                          })) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(item.title), 1)
                        ], 8, ["href"]);
                      }), 128))
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
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "flex items-center gap-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$v, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$v)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden h-full lg:flex lg:flex-1">`);
      _push(ssrRenderComponent(unref(_sfc_main$a), { class: "ml-10 flex h-full items-stretch" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "flex h-full items-stretch space-x-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(mainNavItems), (item, index) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$9), {
                      key: index,
                      class: "relative flex h-full items-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Link), {
                            class: [unref(navigationMenuTriggerStyle)(), activeItemStyles.value(item.href), "h-9 cursor-pointer px-3"],
                            href: item.href
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (item.icon) {
                                  ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.icon), { class: "mr-2 h-4 w-4" }, null), _parent5, _scopeId4);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(` ${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                    key: 0,
                                    class: "mr-2 h-4 w-4"
                                  })) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (isCurrentRoute.value(item.href)) {
                            _push4(`<div class="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"${_scopeId3}></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(unref(Link), {
                              class: [unref(navigationMenuTriggerStyle)(), activeItemStyles.value(item.href), "h-9 cursor-pointer px-3"],
                              href: item.href
                            }, {
                              default: withCtx(() => [
                                item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                  key: 0,
                                  class: "mr-2 h-4 w-4"
                                })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "href"]),
                            isCurrentRoute.value(item.href) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(mainNavItems), (item, index) => {
                      return openBlock(), createBlock(unref(_sfc_main$9), {
                        key: index,
                        class: "relative flex h-full items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            class: [unref(navigationMenuTriggerStyle)(), activeItemStyles.value(item.href), "h-9 cursor-pointer px-3"],
                            href: item.href
                          }, {
                            default: withCtx(() => [
                              item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                key: 0,
                                class: "mr-2 h-4 w-4"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "href"]),
                          isCurrentRoute.value(item.href) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$8), { class: "flex h-full items-stretch space-x-2" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(mainNavItems), (item, index) => {
                    return openBlock(), createBlock(unref(_sfc_main$9), {
                      key: index,
                      class: "relative flex h-full items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          class: [unref(navigationMenuTriggerStyle)(), activeItemStyles.value(item.href), "h-9 cursor-pointer px-3"],
                          href: item.href
                        }, {
                          default: withCtx(() => [
                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                              key: 0,
                              class: "mr-2 h-4 w-4"
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "href"]),
                        isCurrentRoute.value(item.href) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                        })) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-auto flex items-center space-x-2"><div class="relative flex items-center space-x-1">`);
      _push(ssrRenderComponent(unref(_sfc_main$y), {
        variant: "ghost",
        size: "icon",
        class: "group h-9 w-9 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), { class: "size-5 opacity-80 group-hover:opacity-100" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search), { class: "size-5 opacity-80 group-hover:opacity-100" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden space-x-1 lg:flex"><!--[-->`);
      ssrRenderList(unref(rightNavItems), (item) => {
        _push(ssrRenderComponent(unref(_sfc_main$D), { "delay-duration": 0 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$F), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$C), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$y), {
                            variant: "ghost",
                            size: "icon",
                            "as-child": "",
                            class: "group h-9 w-9 cursor-pointer"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noopener noreferrer"${_scopeId4}><span class="sr-only"${_scopeId4}>${ssrInterpolate(item.title)}</span>`);
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.icon), { class: "size-5 opacity-80 group-hover:opacity-100" }, null), _parent5, _scopeId4);
                                _push5(`</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: item.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, [
                                    createVNode("span", { class: "sr-only" }, toDisplayString(item.title), 1),
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "size-5 opacity-80 group-hover:opacity-100" }))
                                  ], 8, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$y), {
                              variant: "ghost",
                              size: "icon",
                              "as-child": "",
                              class: "group h-9 w-9 cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: item.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, [
                                  createVNode("span", { class: "sr-only" }, toDisplayString(item.title), 1),
                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "size-5 opacity-80 group-hover:opacity-100" }))
                                ], 8, ["href"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$E), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p${_scopeId3}>${ssrInterpolate(item.title)}</p>`);
                        } else {
                          return [
                            createVNode("p", null, toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$C), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$y), {
                            variant: "ghost",
                            size: "icon",
                            "as-child": "",
                            class: "group h-9 w-9 cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: item.href,
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, [
                                createVNode("span", { class: "sr-only" }, toDisplayString(item.title), 1),
                                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "size-5 opacity-80 group-hover:opacity-100" }))
                              ], 8, ["href"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$E), null, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$F), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$C), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$y), {
                          variant: "ghost",
                          size: "icon",
                          "as-child": "",
                          class: "group h-9 w-9 cursor-pointer"
                        }, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: item.href,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, [
                              createVNode("span", { class: "sr-only" }, toDisplayString(item.title), 1),
                              (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "size-5 opacity-80 group-hover:opacity-100" }))
                            ], 8, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$E), null, {
                      default: withCtx(() => [
                        createVNode("p", null, toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$j), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$d), { "as-child": true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$y), {
                    variant: "ghost",
                    size: "icon",
                    class: "relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$n), { class: "size-8 overflow-hidden rounded-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (user.value.avatar) {
                                _push5(ssrRenderComponent(unref(_sfc_main$l), {
                                  src: user.value.avatar,
                                  alt: user.value.name
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(_sfc_main$m), { class: "rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(unref(getInitials)(user.value.name))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(getInitials)(user.value.name)), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                user.value.avatar ? (openBlock(), createBlock(unref(_sfc_main$l), {
                                  key: 0,
                                  src: user.value.avatar,
                                  alt: user.value.name
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                createVNode(unref(_sfc_main$m), { class: "rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(getInitials)(user.value.name)), 1)
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
                          createVNode(unref(_sfc_main$n), { class: "size-8 overflow-hidden rounded-full" }, {
                            default: withCtx(() => [
                              user.value.avatar ? (openBlock(), createBlock(unref(_sfc_main$l), {
                                key: 0,
                                src: user.value.avatar,
                                alt: user.value.name
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              createVNode(unref(_sfc_main$m), { class: "rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(getInitials)(user.value.name)), 1)
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
                } else {
                  return [
                    createVNode(unref(_sfc_main$y), {
                      variant: "ghost",
                      size: "icon",
                      class: "relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$n), { class: "size-8 overflow-hidden rounded-full" }, {
                          default: withCtx(() => [
                            user.value.avatar ? (openBlock(), createBlock(unref(_sfc_main$l), {
                              key: 0,
                              src: user.value.avatar,
                              alt: user.value.name
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                            createVNode(unref(_sfc_main$m), { class: "rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(getInitials)(user.value.name)), 1)
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              align: "end",
              class: "w-56"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$c, { user: user.value }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$c, { user: user.value }, null, 8, ["user"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$d), { "as-child": true }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$y), {
                    variant: "ghost",
                    size: "icon",
                    class: "relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$n), { class: "size-8 overflow-hidden rounded-full" }, {
                        default: withCtx(() => [
                          user.value.avatar ? (openBlock(), createBlock(unref(_sfc_main$l), {
                            key: 0,
                            src: user.value.avatar,
                            alt: user.value.name
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          createVNode(unref(_sfc_main$m), { class: "rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(getInitials)(user.value.name)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$i), {
                align: "end",
                class: "w-56"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$c, { user: user.value }, null, 8, ["user"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (props.breadcrumbs.length > 1) {
        _push(`<div class="flex w-full border-b border-sidebar-border/70"><div class="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">`);
        _push(ssrRenderComponent(_sfc_main$o, { breadcrumbs: __props.breadcrumbs }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "AppShell",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const isOpen = usePage().props.sidebarOpen;
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.variant === "header") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen w-full flex-col" }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$z), mergeProps({ "default-open": unref(isOpen) }, _attrs), {
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
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppShell.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "AppHeaderLayout",
  __ssrInlineRender: true,
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ class: "flex-col" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, { breadcrumbs: __props.breadcrumbs }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$x, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, { breadcrumbs: __props.breadcrumbs }, null, 8, ["breadcrumbs"]),
              createVNode(_sfc_main$x, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/app/AppHeaderLayout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({ breadcrumbs: __props.breadcrumbs }, _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AppLayout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
function useBreadcrumbs(page, data = {}) {
  return computed(() => {
    switch (page) {
      case "dashboard":
        return [
          { title: "Halaman Utama", href: T("home") },
          { title: "Dashboard", href: T("dashboard") }
        ];
      // case 'user.show':
      //   return [
      //     { title: 'Home', href: route('home') },
      //     { title: 'Users', href: route('users.index') },
      //     { title: data.user.name, href: route('users.show', { id: data.user.id }) }
      //   ]
      default:
        return [];
    }
  });
}
const _sfc_main$3 = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const breadcrumbs = useBreadcrumbs("dashboard");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard - Zakat2U" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex h-10 w-full items-center justify-center gap-2 md:gap-4 bg-black/90 text-white font-sans animate-gradient-move",
    style: { "background": "linear-gradient(90deg, #2e3191 0%, #00a551 25%, #2e3191 50%, #00a551 75%, #2e3191 100%), url('https://cdn.fathul.my/assets/images/header-noise.png')", "background-blend-mode": "overlay", "background-repeat": "repeat", "background-size": "200% 100%, 24px 24px" }
  }, _attrs))}><p class="font-extrabold text-base leading-[1.4] tracking-[0.01em] flex items-center gap-1">Program Jaminan Kerjaya<span class="opacity-60 font-extrabold ml-1">2025</span></p><a href="/" class="inline-flex items-center justify-center rounded-full bg-white text-black font-extrabold px-3 text-[0.85rem] leading-[1.1] h-6">Daftar</a></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Banner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "UnderDevelopment",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center px-4 py-12" }, _attrs))}><div class="max-w-2xl w-full mx-auto text-center space-y-8"><div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">`);
      _push(ssrRenderComponent(unref(Code), { class: "w-8 h-8 text-primary" }, null, _parent));
      _push(`</div><div class="space-y-4"><h1 class="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"> Portfolio Under Development </h1><p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto"> I&#39;m currently building my portfolio website. Check back soon to see my work and projects. </p></div><div class="flex items-center justify-center gap-3 text-neutral-500 dark:text-neutral-400">`);
      _push(ssrRenderComponent(unref(Wrench), { class: "w-5 h-5" }, null, _parent));
      _push(`<span class="text-sm font-medium">Work in Progress</span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/UnderDevelopment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Fathul Amin" }, null, _parent));
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp(
    {
      page,
      render: renderToString,
      title: (title) => title,
      resolve: (name) => {
        const eagerPages = /* @__PURE__ */ Object.assign({ "./Pages/Dashboard.vue": __vite_glob_0_0, "./Pages/Home.vue": __vite_glob_0_1 });
        const lazyPages = /* @__PURE__ */ Object.assign({});
        const pagePath = `./Pages/${name}.vue`;
        if (eagerPages[pagePath]) {
          return eagerPages[pagePath];
        }
        if (lazyPages[pagePath]) {
          return lazyPages[pagePath]();
        }
        throw new Error(`Unknown page: ${name}`);
      },
      setup({ App, props, plugin }) {
        const app = createSSRApp({ render: () => h$1(App, props) });
        const ziggyConfig = {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location)
        };
        const route = (name, params, absolute) => T(name, params, absolute, ziggyConfig);
        app.config.globalProperties.route = route;
        if (typeof window === "undefined") {
          global.route = route;
        }
        app.use(plugin);
        app.use(k);
        return app;
      }
    },
    { cluster: true }
  ),
  process.env.VITE_INERTIA_SSR_PORT || 13714
);
