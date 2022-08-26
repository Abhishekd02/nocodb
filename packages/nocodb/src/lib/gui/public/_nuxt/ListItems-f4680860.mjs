import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, L as useVModel, i as inject, r as ref, w as watch, e as computed, U as UITypes, R as RelationTypes, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, k as createCommentVNode, c as createElementBlock, F as Fragment, f as renderList, y as createTextVNode, v as toDisplayString, e5 as Suspense, dl as __unplugin_components_6, C as pushScopeId, E as popScopeId } from "./entry-61ceea7f.mjs";
import { _ as __unplugin_components_0 } from "./reload-23e1ac74.mjs";
import { e as ColumnInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import { a as useLTARStoreOrThrow } from "./useLTARStore-f0967bf9.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c8c479be.mjs";
import { I as Input } from "./Input-081ff014.mjs";
import { B as Button } from "./button-da542739.mjs";
import { C as Card } from "./Card-637b0d8a.mjs";
import { _ as __unplugin_components_5 } from "./index-0b1576d7.mjs";
import { M as Modal } from "./Modal-d5a36a0f.mjs";
import "./index-3e429aeb.mjs";
import "./index-cfa50bee.mjs";
import "./omit-173fd1c5.mjs";
import "./deepCompare-c3a57270.mjs";
import "./antInputDirective-04640d14.mjs";
import "./wave-52b13188.mjs";
import "./index-7349112e.mjs";
import "./TabPane-12ca446e.mjs";
import "./Dropdown-9f66da27.mjs";
import "./useState-068748ba.mjs";
import "./LeftOutlined-f246f0cb.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./index-3935e1b2.mjs";
import "./pickAttrs-ba132318.mjs";
import "./SearchOutlined-66b33d9a.mjs";
var ListItems_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "[data-v-39bc0ff4] .ant-pagination-item a{line-height:21px!important}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListItems",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "addNewRecord"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const ExpandedForm = defineAsyncComponent(() => __vitePreload(() => import("./index-44c1b2d3.mjs").then(function(n) {
      return n.i;
    }), true ? ["index-44c1b2d3.mjs","Cell-8f197eca.mjs","useVirtualCell-c8c479be.mjs","entry-61ceea7f.mjs","entry.05e9f68d.css","deepCompare-c3a57270.mjs","index-c79a04bb.mjs","index-2b41c829.mjs","dropdown-ba657059.mjs","Dropdown-9f66da27.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","RightOutlined-4a9f51db.mjs","omit-173fd1c5.mjs","delete-outline-e19db0b9.mjs","menu-down-57034c65.mjs","Modal-d5a36a0f.mjs","pickAttrs-ba132318.mjs","index-1f166877.mjs","isNumeric-1b2178ad.mjs","TextArea-4c687bd9.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","useState-068748ba.mjs","star-outline-35a0d043.mjs","index-ae866fde.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs","CollapsePanel-3cbe710e.mjs","minus-circle-outline-fe5ab5b7.mjs","Checkbox-99b125b8.mjs","close-f98de9d8.mjs","plus-15c52e39.mjs","file-copy-outline-b0187a2b.mjs","reload-23e1ac74.mjs","fileUtils-f5868683.mjs","index-c5e00eea.mjs"] : void 0));
    const vModel = useVModel(props, "modelValue", emit);
    const column = inject(ColumnInj);
    const {
      childrenExcludedList,
      loadChildrenExcludedList,
      childrenExcludedListPagination,
      relatedTablePrimaryValueProp,
      link,
      getRelatedTableRowId,
      relatedTableMeta,
      meta,
      row
    } = useLTARStoreOrThrow();
    const { addLTARRef, isNew } = useSmartsheetRowStoreOrThrow();
    const isPublic = inject(IsPublicInj, ref(false));
    const linkRow = async (row2) => {
      if (isNew.value) {
        addLTARRef(row2, column == null ? void 0 : column.value);
      } else {
        await link(row2);
      }
      vModel.value = false;
    };
    watch(vModel, (nextVal, prevVal) => {
      if (nextVal && !prevVal) {
        childrenExcludedListPagination.query = "";
        childrenExcludedListPagination.page = 1;
        loadChildrenExcludedList();
      }
    });
    const expandedFormDlg = ref(false);
    const newRowState = computed(() => {
      var _a, _b, _c, _d;
      const colOpt = (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.colOptions;
      const colInRelatedTable = (_c = (_b = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _b.columns) == null ? void 0 : _c.find((col) => {
        if (col.uidt !== UITypes.LinkToAnotherRecord)
          return false;
        const colOpt1 = col == null ? void 0 : col.colOptions;
        if ((colOpt1 == null ? void 0 : colOpt1.fk_related_model_id) !== meta.value.id)
          return false;
        if (colOpt.type === RelationTypes.MANY_TO_MANY && (colOpt1 == null ? void 0 : colOpt1.type) === RelationTypes.MANY_TO_MANY) {
          return colOpt.fk_parent_column_id === colOpt1.fk_child_column_id && colOpt.fk_child_column_id === colOpt1.fk_parent_column_id;
        } else {
          return colOpt.fk_parent_column_id === colOpt1.fk_parent_column_id && colOpt.fk_child_column_id === colOpt1.fk_child_column_id;
        }
      });
      if (!colInRelatedTable)
        return {};
      const relatedTableColOpt = colInRelatedTable == null ? void 0 : colInRelatedTable.colOptions;
      if (!relatedTableColOpt)
        return {};
      if (relatedTableColOpt.type === RelationTypes.BELONGS_TO) {
        return {
          [colInRelatedTable.title]: (_d = row == null ? void 0 : row.value) == null ? void 0 : _d.row
        };
      } else {
        return {
          [colInRelatedTable.title]: (row == null ? void 0 : row.value) && [row.value.row]
        };
      }
    });
    const __returned__ = { props, emit, ExpandedForm, vModel, column, childrenExcludedList, loadChildrenExcludedList, childrenExcludedListPagination, relatedTablePrimaryValueProp, link, getRelatedTableRowId, relatedTableMeta, meta, row, addLTARRef, isNew, isPublic, linkRow, expandedFormDlg, newRowState, Empty: __unplugin_components_6 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-39bc0ff4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "max-h-[max(calc(100vh_-_300px)_,500px)] flex flex-col py-6" };
const _hoisted_2 = { class: "flex mb-4 items-center gap-2 px-12" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Add new record");
const _hoisted_5 = { class: "flex-1 overflow-auto min-h-0 scrollbar-thin-dull px-12" };
const _hoisted_6 = { class: "hidden group-hover:inline text-gray-400 text-[11px] ml-1" };
const _hoisted_7 = { class: "flex justify-center mt-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = Input;
  const _component_MdiReload = __unplugin_components_0;
  const _component_a_button = Button;
  const _component_a_card = Card;
  const _component_a_pagination = __unplugin_components_5;
  const _component_a_empty = __unplugin_components_6;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => $setup.vModel = $event),
    footer: null,
    title: "Link Record",
    "body-style": { padding: 0 }
  }, {
    default: withCtx(() => {
      var _a, _b, _c, _d, _e;
      return [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_a_input, {
              value: $setup.childrenExcludedListPagination.query,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.childrenExcludedListPagination.query = $event),
              placeholder: "Filter query",
              class: "max-w-[200px]",
              size: "small"
            }, null, 8, ["value"]),
            _hoisted_3,
            createVNode(_component_MdiReload, {
              class: "cursor-pointer text-gray-500 nc-reload",
              onClick: $setup.loadChildrenExcludedList
            }, null, 8, ["onClick"]),
            !$setup.isPublic ? (openBlock(), createBlock(_component_a_button, {
              key: 0,
              type: "primary",
              size: "small",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.expandedFormDlg = true)
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          ((_b = (_a = $setup.childrenExcludedList) == null ? void 0 : _a.pageInfo) == null ? void 0 : _b.totalRows) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((_d = (_c = $setup.childrenExcludedList) == null ? void 0 : _c.list) != null ? _d : [], (refRow, i) => {
                return openBlock(), createBlock(_component_a_card, {
                  key: i,
                  class: "!my-4 cursor-pointer !hover:bg-gray-200/50 hover:shadow-md group",
                  onClick: ($event) => $setup.linkRow(refRow)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(refRow[$setup.relatedTablePrimaryValueProp]), 1),
                    createBaseVNode("span", _hoisted_6, "(Primary key : " + toDisplayString($setup.getRelatedTableRowId(refRow)) + ")", 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_7, [
              ((_e = $setup.childrenExcludedList) == null ? void 0 : _e.pageInfo) ? (openBlock(), createBlock(_component_a_pagination, {
                key: 0,
                current: $setup.childrenExcludedListPagination.page,
                "onUpdate:current": _cache[2] || (_cache[2] = ($event) => $setup.childrenExcludedListPagination.page = $event),
                "page-size": $setup.childrenExcludedListPagination.size,
                "onUpdate:page-size": _cache[3] || (_cache[3] = ($event) => $setup.childrenExcludedListPagination.size = $event),
                class: "mt-2 !text-xs",
                size: "small",
                total: $setup.childrenExcludedList.pageInfo.totalRows,
                "show-less-items": ""
              }, null, 8, ["current", "page-size", "total"])) : createCommentVNode("", true)
            ])
          ], 64)) : (openBlock(), createBlock(_component_a_empty, {
            key: 1,
            class: "my-10",
            image: $setup.Empty.PRESENTED_IMAGE_SIMPLE
          }, null, 8, ["image"])),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              $setup.expandedFormDlg ? (openBlock(), createBlock($setup["ExpandedForm"], {
                key: 0,
                modelValue: $setup.expandedFormDlg,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.expandedFormDlg = $event),
                meta: $setup.relatedTableMeta,
                row: { row: {}, oldRow: {}, rowMeta: { new: true } },
                state: $setup.newRowState,
                "use-meta-fields": ""
              }, null, 8, ["modelValue", "meta", "state"])) : createCommentVNode("", true)
            ]),
            _: 1
          }))
        ])
      ];
    }),
    _: 1
  }, 8, ["visible"]);
}
var ListItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39bc0ff4"]]);
export { ListItems as default };