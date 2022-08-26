import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, F as Fragment, b as createBaseVNode, f as renderList, j as createBlock, k as createCommentVNode, g as createVNode } from "./entry-d9bc2aad.mjs";
import { M as MdiPlus } from "./plus-e8140861.mjs";
import { M as MdiArrowExpand } from "./Cell-0c4aa7dc.mjs";
import { u as useUIPermission } from "./index-3de9c023.mjs";
import { e as ColumnInj, g as RowInj, h as CellValueInj, R as ReloadViewDataHookInj, I as IsFormInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-b10528dd.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-26259a59.mjs";
import "./dropdown-5e0a28d4.mjs";
import "./Dropdown-ca677e8d.mjs";
import "./index-16f90ce9.mjs";
import "./button-3d871114.mjs";
import "./wave-d4537590.mjs";
import "./RightOutlined-05bf04ed.mjs";
import "./omit-79be01c9.mjs";
import "./delete-outline-29401aa6.mjs";
import "./menu-down-f001ffbb.mjs";
import "./Modal-3070863e.mjs";
import "./pickAttrs-fc04d54e.mjs";
import "./index-1ad4e0b9.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-aec9452a.mjs";
import "./Input-11f8ddea.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-59408c6a.mjs";
import "./index-fd7ac4f7.mjs";
import "./TabPane-b435e2ca.mjs";
import "./useState-7c8b49a7.mjs";
import "./star-outline-a2e25035.mjs";
import "./index-44e9a035.mjs";
import "./index-c696756a.mjs";
import "./LeftOutlined-fc38eee0.mjs";
import "./index-0b813702.mjs";
import "./SearchOutlined-8238e142.mjs";
import "./CollapsePanel-35d20477.mjs";
import "./minus-circle-outline-f6556adb.mjs";
import "./deepCompare-c3a57270.mjs";
import "./Checkbox-4ea45600.mjs";
import "./close-e1c8b11f.mjs";
import "./file-copy-outline-e7990d77.mjs";
import "./reload-63954944.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-43905f62.mjs";
import "./index-32959b50.mjs";
var ManyToMany_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-5eeb4d87]{cursor:pointer;display:none}.chips-wrapper:hover .nc-action-icon[data-v-5eeb4d87]{display:inline-block}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManyToMany",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-19c1a5f2.mjs"), true ? ["ItemChip-19c1a5f2.mjs","ItemChip.59078ca5.css","entry-d9bc2aad.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","index-3de9c023.mjs","useLTARStore-b10528dd.mjs","index-32959b50.mjs","Modal-3070863e.mjs","omit-79be01c9.mjs","pickAttrs-fc04d54e.mjs","index-16f90ce9.mjs","button-3d871114.mjs","wave-d4537590.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-155d4236.mjs"), true ? ["ListItems-155d4236.mjs","ListItems.2e46f2c1.css","entry-d9bc2aad.mjs","entry.05e9f68d.css","reload-63954944.mjs","index-c79a04bb.mjs","useLTARStore-b10528dd.mjs","index-32959b50.mjs","Modal-3070863e.mjs","omit-79be01c9.mjs","pickAttrs-fc04d54e.mjs","index-16f90ce9.mjs","button-3d871114.mjs","wave-d4537590.mjs","useVirtualCell-26259a59.mjs","deepCompare-c3a57270.mjs","Input-11f8ddea.mjs","antInputDirective-04640d14.mjs","Card-59408c6a.mjs","index-fd7ac4f7.mjs","TabPane-b435e2ca.mjs","Dropdown-ca677e8d.mjs","useState-7c8b49a7.mjs","index-c696756a.mjs","LeftOutlined-fc38eee0.mjs","RightOutlined-05bf04ed.mjs","index-0b813702.mjs","SearchOutlined-8238e142.mjs"] : void 0));
    const ListChildItems = defineAsyncComponent(() => __vitePreload(() => import("./ListChildItems-f6d0211d.mjs"), true ? ["ListChildItems-f6d0211d.mjs","ListChildItems.2ccb20cd.css","entry-d9bc2aad.mjs","entry.05e9f68d.css","delete-outline-29401aa6.mjs","reload-63954944.mjs","index-c79a04bb.mjs","useLTARStore-b10528dd.mjs","index-32959b50.mjs","Modal-3070863e.mjs","omit-79be01c9.mjs","pickAttrs-fc04d54e.mjs","index-16f90ce9.mjs","button-3d871114.mjs","wave-d4537590.mjs","useVirtualCell-26259a59.mjs","deepCompare-c3a57270.mjs","Card-59408c6a.mjs","index-fd7ac4f7.mjs","TabPane-b435e2ca.mjs","Dropdown-ca677e8d.mjs","useState-7c8b49a7.mjs","index-c696756a.mjs","LeftOutlined-fc38eee0.mjs","RightOutlined-05bf04ed.mjs","index-0b813702.mjs","antInputDirective-04640d14.mjs","SearchOutlined-8238e142.mjs"] : void 0));
    const column = inject(ColumnInj);
    const row = inject(RowInj);
    const cellValue = inject(CellValueInj);
    const reloadTrigger = inject(ReloadViewDataHookInj);
    const isForm = inject(IsFormInj);
    const readOnly = inject(ReadonlyInj, false);
    const isLocked = inject(IsLockedInj);
    const listItemsDlg = ref(false);
    const childListDlg = ref(false);
    const { isUIAllowed } = useUIPermission();
    const { state, isNew, removeLTARRef } = useSmartsheetRowStoreOrThrow();
    const { loadRelatedTableMeta, relatedTablePrimaryValueProp, unlink } = useProvideLTARStore(column, row, isNew, reloadTrigger.trigger);
    [__temp, __restore] = withAsyncContext(() => loadRelatedTableMeta()), await __temp, __restore();
    const localCellValue = computed(() => {
      var _a, _b, _c;
      if (cellValue == null ? void 0 : cellValue.value) {
        return (_a = cellValue == null ? void 0 : cellValue.value) != null ? _a : [];
      } else if (isNew.value) {
        return (_c = (_b = state == null ? void 0 : state.value) == null ? void 0 : _b[column == null ? void 0 : column.value.title]) != null ? _c : [];
      }
      return [];
    });
    const cells = computed(() => localCellValue.value.reduce((acc, curr) => {
      if (!relatedTablePrimaryValueProp.value)
        return acc;
      const value = curr[relatedTablePrimaryValueProp.value];
      if (!value)
        return acc;
      return [...acc, { value, item: curr }];
    }, []));
    const unlinkRef = async (rec) => {
      if (isNew.value) {
        removeLTARRef(rec, column == null ? void 0 : column.value);
      } else {
        await unlink(rec);
      }
    };
    const __returned__ = { ItemChip, ListItems, ListChildItems, column, row, cellValue, reloadTrigger, isForm, readOnly, isLocked, listItemsDlg, childListDlg, isUIAllowed, state, isNew, removeLTARRef, loadRelatedTableMeta, relatedTablePrimaryValueProp, unlink, localCellValue, cells, unlinkRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center gap-1 w-full h-full chips-wrapper" };
const _hoisted_2 = { class: "chips flex items-center img-container flex-1 hm-items flex-nowrap min-w-0 overflow-hidden" };
const _hoisted_3 = {
  key: 0,
  class: "flex justify-end gap-1 min-h-[30px] items-center"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_MdiArrowExpand = MdiArrowExpand;
  const _component_MdiPlus = MdiPlus;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$setup.isForm ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("div", _hoisted_2, [
        $setup.cells ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.cells, (cell, i) => {
            return openBlock(), createBlock($setup["ItemChip"], {
              key: i,
              item: cell.item,
              value: cell.value,
              onUnlink: ($event) => $setup.unlinkRef(cell.item)
            }, null, 8, ["item", "value", "onUnlink"]);
          }), 128)),
          ((_a = $setup.cells) == null ? void 0 : _a.length) === 10 ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "caption pointer ml-1 grey--text",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.childListDlg = true)
          }, "more... ")) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]),
      !$setup.isLocked && $setup.isUIAllowed("xcDatatableEditable") ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createVNode(_component_MdiArrowExpand, {
          class: "text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 nc-arrow-expand",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.childListDlg = true)
        }),
        !$setup.readOnly ? (openBlock(), createBlock(_component_MdiPlus, {
          key: 0,
          class: "text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 nc-plus",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.listItemsDlg = true)
        })) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    createVNode($setup["ListItems"], {
      modelValue: $setup.listItemsDlg,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.listItemsDlg = $event)
    }, null, 8, ["modelValue"]),
    createVNode($setup["ListChildItems"], {
      modelValue: $setup.childListDlg,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.childListDlg = $event),
      onAttachRecord: _cache[5] || (_cache[5] = () => {
        $setup.childListDlg = false;
        $setup.listItemsDlg = true;
      })
    }, null, 8, ["modelValue"])
  ]);
}
var ManyToMany = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5eeb4d87"]]);
export { ManyToMany as default };