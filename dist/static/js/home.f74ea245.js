/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 31853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.js": [
		61735
	],
	"./es_ES.js": [
		99352
	],
	"./es_LA.js": [
		20678,
		619
	],
	"./es_shared.js": [
		27101
	],
	"./zh_CN.js": [
		15046
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 31853;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-ps": 20315,
	"./ar-ps.js": 20315,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 10150,
	"./it-ch.js": 10150,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 18758,
	"./km.js": 18758,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku-kmr": 90563,
	"./ku-kmr.js": 90563,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 85893,
	"./ss.js": 85893,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 70274:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  ageIncrease: () => (ageIncrease)
});

// NAMESPACE OBJECT: ./src/store/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  name: () => (getters_name)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js + 1 modules
var runtime_dom_esm_bundler = __webpack_require__(58061);
// EXTERNAL MODULE: ./node_modules/@adc/vigour-ui/lib/spl.js
var spl = __webpack_require__(92025);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(22201);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66252);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/home/index.vue?vue&type=template&id=5f435d4c


const _hoisted_1 = { class: "container-fluid px-4 py-3 height-main first-layer-color" }
const _hoisted_2 = { class: "row row-gap-15 height-main" }
const _hoisted_3 = { class: "col-sm-12 col-md-4" }
const _hoisted_4 = { class: "col-sm-12 col-md-4" }
const _hoisted_5 = { class: "col-sm-12 col-md-4" }
const _hoisted_6 = { class: "col-sm-12 col-md-4" }
const _hoisted_7 = { class: "col-sm-12 col-md-4" }
const _hoisted_8 = { class: "col-sm-12 col-md-4" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ActiveIncidents = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ActiveIncidents")
  const _component_ActivePotentialTicket = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ActivePotentialTicket")
  const _component_NationalAvailability = (0,runtime_core_esm_bundler/* resolveComponent */.up)("NationalAvailability")
  const _component_ActiveCr = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ActiveCr")
  const _component_ActiveUsers = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ActiveUsers")
  const _component_ActiveDegradationTicket = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ActiveDegradationTicket")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("main", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ActiveIncidents)
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ActivePotentialTicket)
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_NationalAvailability)
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ActiveCr)
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ActiveUsers)
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ActiveDegradationTicket)
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/views/home/index.vue?vue&type=template&id=5f435d4c

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveCr.vue?vue&type=template&id=71df7ffe


const ActiveCrvue_type_template_id_71df7ffe_hoisted_1 = { class: "row justify-content-between px-3" }
const ActiveCrvue_type_template_id_71df7ffe_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "w-fit-content card-title m-0 align-self-center ps-0" }, "CR Valid For Today", -1)
const ActiveCrvue_type_template_id_71df7ffe_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-download" }, null, -1)
const ActiveCrvue_type_template_id_71df7ffe_hoisted_4 = { class: "row mt-3" }
const ActiveCrvue_type_template_id_71df7ffe_hoisted_5 = {
  id: "main-chart1",
  ref: "chartRef",
  style: {"height":"250px","width":"600px"}
}
const ActiveCrvue_type_template_id_71df7ffe_hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "row justify-content-center mt-3" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "chart-legend" }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
      class: "fa fa-square",
      "aria-hidden": "true",
      style: {"color":"#C40054"}
    }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" High Impact")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "chart-legend" }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
      class: "fa fa-square",
      "aria-hidden": "true",
      style: {"color":"#FCC800"}
    }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Low Impact")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "chart-legend" }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
      class: "fa fa-square",
      "aria-hidden": "true",
      style: {"color":"#30B5C5"}
    }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" No Impact")
  ])
], -1)

function ActiveCrvue_type_template_id_71df7ffe_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sections = (0,runtime_core_esm_bundler/* resolveComponent */.up)("sections")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_sections, {
    class: "card px-3 py-4 card-h-100 justify-content-top",
    style: {"height":"100%"}
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveCrvue_type_template_id_71df7ffe_hoisted_1, [
        ActiveCrvue_type_template_id_71df7ffe_hoisted_2,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
          class: "btn btn-download w-fit-content",
          onClick: _cache[0] || (_cache[0] = $event => ($options.ActiveCrExport()))
        }, [
          (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Download "),
          ActiveCrvue_type_template_id_71df7ffe_hoisted_3
        ])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveCrvue_type_template_id_71df7ffe_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", ActiveCrvue_type_template_id_71df7ffe_hoisted_5, null, 512),
        ActiveCrvue_type_template_id_71df7ffe_hoisted_6
      ])
    ]),
    _: 1
  }))
}
;// CONCATENATED MODULE: ./src/views/sections/ActiveCr.vue?vue&type=template&id=71df7ffe

// EXTERNAL MODULE: ./node_modules/echarts/index.js + 540 modules
var echarts = __webpack_require__(4882);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveCr.vue?vue&type=script&lang=js

// MODULE




/* harmony default export */ const ActiveCrvue_type_script_lang_js = ({
    name: 'ActiveCr',
    data() {
        return {
            loading: false,
            dataCharts: [],

            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        };
    },
    async mounted() {
        await spl.U.initCsrfToken();

        await this.GetCrData();
        await this.CheckRefetchData();
    },
    methods: {
        ActiveCrExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/cr_export", "_blank"
            );
        },
        async GetCrData() {
            this.loading = true;
            this.dataCharts = [];
            spl.MessageProcessor.process({
                serviceId: 'ni_get_change_request',
                data: {},
                showErrorMessage: false,
                success: (json) => {
                    this.dataCharts = json.res;
                    this.GetCharts('main-chart1', this.dataCharts);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error Outages Card');
                }
            });
        },
        GetCharts(id, data) {
            var chartDom = document.getElementById(id);
            // var myChart = echarts.init(chartDom);
            var myChart = echarts/* init */.S1(this.$refs.chartRef);
            if (!chartDom) {
                console.error('Chart container not found');
                return;
            }
            var dataCharts = data;
            var option;
            let gradients = ['#C40054', '#FCC800', '#30B5C5'];

            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)'
                }
            };

            option = {
                brush: {
                    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                    xAxisIndex: 0
                },
                feature: {
                    saveAsImage: {}
                },
                iconStyle: {
                    right: '20px',
                },
                dataView: {
                    show: false
                },
                toolbox: {
                    show: false,
                },
                xAxis: {
                    data: dataCharts.map((value) => value.cr_risklevel),
                    name: '',
                    axisLine: { onZero: true },
                    splitLine: { show: false },
                    splitArea: { show: false },
                },
                yAxis: {
                    show: false,
                    name: 'Quantity Days',
                },
                grid: {
                    bottom: 20,
                },
                series: [
                    {
                        name: 'Ok',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        label: {
                            show: true,
                            position: 'top',
                            fontWeight: 'bold',
                            color: '#5B5B5B',
                        },
                        data: dataCharts.map((value, index) => ({
                            value: value.cr_count,
                            itemStyle: {
                                color: gradients[index],
                                barBorderRadius: value.cr_count < 0 ? [0, 0, 4, 4] : [4, 4, 0, 0],
                            }
                        })),
                    },
                ]
            };

            myChart.on('brushSelected', function (params) {
                var brushed = [];
                var brushComponent = params.batch[0];
                for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                    var rawIndices = brushComponent.selected[sIdx].dataIndex;
                    // Check if the selected indices contain 0; if not, then display them
                    if (!rawIndices.includes(0)) {
                        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
                    }
                }
                myChart.setOption({
                    title: {
                        text: '', // Set an empty string to remove the title
                    },
                });
            });

            option && myChart.setOption(option);
            myChart.hideLoading();
            myChart.resize();
        },


        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            console.log(hours, 'hours', minutes, 'minutes');
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
            console.log(this.todayDate, 'today date');
            console.log(this.lastUpdated, 'today date');
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, 'minutes only');
            this.refetch = false;
            if ([0, 30].includes(minutes)) {
                this.UpdateLastUpdatedTime();
                await this.GetCrData();
                console.log('update refetch data');
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                console.log('check fetching refetch');
                this.CheckMinutes()
                this.refetch = false;
                console.log(this.refetch, 'will be false');
            }, 30 * 1000)
            console.log(this.fetching, 'check refetch data');
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/ActiveCr.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(48118);
;// CONCATENATED MODULE: ./src/views/sections/ActiveCr.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ActiveCrvue_type_script_lang_js, [['render',ActiveCrvue_type_template_id_71df7ffe_render]])

/* harmony default export */ const ActiveCr = (__exports__);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(56612);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveDegradationTicket.vue?vue&type=template&id=8facd968


const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_1 = { class: "row justify-content-between px-3 mb-3" }
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "w-fit-content card-title m-0 align-self-center ps-0" }, " Active Degradation Ticket (SOC) ", -1)
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-download" }, null, -1)
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_4 = {
  class: "row height-100",
  style: {"height":"100%"}
}
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_5 = {
  class: "col-6 height-100",
  style: {"height":"100%"}
}
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_6 = { class: "card card-left-degrad" }
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "P1", -1)
const ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_8 = {
  key: 0,
  class: "spinner-border text-info",
  role: "status"
}
const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "sr-only" }, "Loading...", -1)
const _hoisted_10 = [
  _hoisted_9
]
const _hoisted_11 = { key: 1 }
const _hoisted_12 = {
  class: "col-6 height-100",
  style: {"height":"100%"}
}
const _hoisted_13 = { class: "card card-right-degrad" }
const _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "P2", -1)
const _hoisted_15 = {
  key: 0,
  class: "spinner-border text-info",
  role: "status"
}
const _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "sr-only" }, "Loading...", -1)
const _hoisted_17 = [
  _hoisted_16
]
const _hoisted_18 = { key: 1 }

function ActiveDegradationTicketvue_type_template_id_8facd968_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sections = (0,runtime_core_esm_bundler/* resolveComponent */.up)("sections")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_sections, {
    class: "card px-3 py-4 height-100 justify-content-top",
    style: {"height":"100%"}
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_1, [
        ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_2,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
          class: "btn btn-download w-fit-content",
          onClick: _cache[0] || (_cache[0] = $event => ($options.ActiveDegradationExport()))
        }, [
          (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Download "),
          ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_3
        ])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_5, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_6, [
            ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_7,
            (this.loading == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActiveDegradationTicketvue_type_template_id_8facd968_hoisted_8, _hoisted_10))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (this.loading == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h1", _hoisted_11, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.sqdtCountP1), 1)
                ]))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [
            _hoisted_14,
            (this.loading == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_15, _hoisted_17))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (this.loading == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h1", _hoisted_18, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.sqdtCountP2), 1)
                ]))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ])
        ])
      ])
    ]),
    _: 1
  }))
}
;// CONCATENATED MODULE: ./src/views/sections/ActiveDegradationTicket.vue?vue&type=template&id=8facd968

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveDegradationTicket.vue?vue&type=script&lang=js




/* harmony default export */ const ActiveDegradationTicketvue_type_script_lang_js = ({
    name: 'ActiveDegradationTicket',
    data() {
        return {
            sqdtCountP1: null,
            sqdtCountP2: null,
            sqdtArray: [],
            loading: false,

            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.GetDataDegradation();
        this.CheckRefetchData();
    },
    methods: {
        ActiveDegradationExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/sqdt_export", "_blank"
            );
        },
        async GetDataDegradation() {
            this.loading = true;
            this.sqdtCountP1 = null;
            this.sqdtCountP2 = null;
            this.sqdtArray = [];
            spl.MessageProcessor.process({
                serviceId: 'ni_get_sqdt',
                data: {},
                showErrorMessage: false,
                success: (json) => {
                    this.sqdtArray = json.res;
                    var filterSqdtP1 = this.sqdtArray.filter(item => !item.priority.includes('P2'));
                    var filterSqdtP2 = this.sqdtArray.filter(item => !item.priority.includes('P1'))
                    this.FilteredData(filterSqdtP1[0].sqdt_count, filterSqdtP2[0].sqdt_count);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async FilteredData(p1, p2) {
            this.sqdtCountP1 = p1;
            this.sqdtCountP2 = p2;
        },
        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            console.log(hours, 'hours', minutes, 'minutes');
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
            console.log(this.todayDate, 'today date');
            console.log(this.lastUpdated, 'today date');
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, 'minutes only');
            this.refetch = false;
            if ([0, 30].includes(minutes)) {
                await this.UpdateLastUpdatedTime();
                await this.GetDataDegradation();
                console.log('update refetch data');
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                console.log('check fetching refetch');
                this.CheckMinutes()
                this.refetch = false;
                console.log(this.refetch, 'will be false');
            }, 30 * 1000)
            console.log(this.fetching, 'check refetch data');
        },
    }
});


;// CONCATENATED MODULE: ./src/views/sections/ActiveDegradationTicket.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/ActiveDegradationTicket.vue




;
const ActiveDegradationTicket_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ActiveDegradationTicketvue_type_script_lang_js, [['render',ActiveDegradationTicketvue_type_template_id_8facd968_render]])

/* harmony default export */ const ActiveDegradationTicket = (ActiveDegradationTicket_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveIncidents.vue?vue&type=template&id=e84e0800


const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_1 = { class: "row justify-content-between px-3" }
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "w-fit-content card-title m-0 align-self-center ps-0" }, "Active Incidents", -1)
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-download" }, null, -1)
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_4 = {
  key: 0,
  class: "row justify-content-center align-self-center"
}
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "spinner-border text-info",
  role: "status"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "sr-only" }, "Loading...")
], -1)
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_6 = [
  ActiveIncidentsvue_type_template_id_e84e0800_hoisted_5
]
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_7 = {
  key: 1,
  class: "row"
}
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_8 = { class: "col-12 col-table" }
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_9 = { class: "content-table" }
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("thead", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Region"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Emergency"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Critical"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Major")
  ])
], -1)
const ActiveIncidentsvue_type_template_id_e84e0800_hoisted_11 = { class: "to-uppercase" }

function ActiveIncidentsvue_type_template_id_e84e0800_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sections = (0,runtime_core_esm_bundler/* resolveComponent */.up)("sections")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_sections, { class: "card px-3 py-4 card-h-100 justify-content-top" }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveIncidentsvue_type_template_id_e84e0800_hoisted_1, [
        ActiveIncidentsvue_type_template_id_e84e0800_hoisted_2,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
          class: "btn btn-download w-fit-content",
          onClick: _cache[0] || (_cache[0] = $event => ($options.ActiveIncidentsExport()))
        }, [
          (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Download "),
          ActiveIncidentsvue_type_template_id_e84e0800_hoisted_3
        ])
      ]),
      (this.loading == true)
        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActiveIncidentsvue_type_template_id_e84e0800_hoisted_4, ActiveIncidentsvue_type_template_id_e84e0800_hoisted_6))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
      (this.loading == false)
        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActiveIncidentsvue_type_template_id_e84e0800_hoisted_7, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveIncidentsvue_type_template_id_e84e0800_hoisted_8, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("table", ActiveIncidentsvue_type_template_id_e84e0800_hoisted_9, [
                ActiveIncidentsvue_type_template_id_e84e0800_hoisted_10,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("tbody", null, [
                  ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($options.formattedData, (regionData, region) => {
                    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("tr", { key: region }, [
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", ActiveIncidentsvue_type_template_id_e84e0800_hoisted_11, (0,shared_esm_bundler/* toDisplayString */.zw)(region), 1),
                      ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(['Emergency', 'Critical', 'Major'], (severityData) => {
                        return (0,runtime_core_esm_bundler/* createElementVNode */._)("td", { key: severityData }, [
                          (regionData[severityData])
                            ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, { key: 0 }, [
                                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(regionData[severityData].tt_count), 1)
                              ], 64))
                            : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, { key: 1 }, [
                                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Null Data ")
                              ], 64))
                        ])
                      }), 64))
                    ]))
                  }), 128))
                ])
              ])
            ])
          ]))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
    ]),
    _: 1
  }))
}
;// CONCATENATED MODULE: ./src/views/sections/ActiveIncidents.vue?vue&type=template&id=e84e0800

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveIncidents.vue?vue&type=script&lang=js




/* harmony default export */ const ActiveIncidentsvue_type_script_lang_js = ({
    name: 'ActiveIncidents',
    data() {
        return {
            activeIncidents: [],
            activeIncidentsUpdate: [],
            loading: false,


            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    computed: {
        ActiveIncidentsExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/tt_export", "_blank"
            );
        },
        formattedData() {
            const formatted = {};
            for (const data of this.activeIncidentsUpdate) {
                if (!formatted[data.region]) {
                    formatted[data.region] = {};
                }
                formatted[data.region][data.severity] = data;
            }
            return formatted;
            this.loading = false;
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.GetDataActiveIncidents();
        this.CheckRefetchData();
    },
    methods: {
        async GetDataActiveIncidents() {
            this.loading = true;
            spl.MessageProcessor.process({
                serviceId: 'ni_get_troubleticket',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    this.activeIncidents = json.res;
                    var filteredArray = this.activeIncidents.filter(item => !item.severity.includes('Potential') && !item.severity.includes('Minor'));
                    this.FilteredData(filteredArray);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async FilteredData(data) {
            this.activeIncidentsUpdate = data;
        },
        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            console.log(hours, 'hours', minutes, 'minutes');
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
            console.log(this.todayDate, 'today date');
            console.log(this.lastUpdated, 'today date');
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, 'minutes only');
            this.refetch = false;
            if ([0, 30].includes(minutes)) {
                await this.UpdateLastUpdatedTime();
                await this.GetDataActiveIncidents();
                console.log('update refetch data');
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                console.log('check fetching refetch');
                this.CheckMinutes()
                this.refetch = false;
                console.log(this.refetch, 'will be false');
            }, 30 * 1000)
            console.log(this.fetching, 'check refetch data');
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/ActiveIncidents.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/ActiveIncidents.vue




;
const ActiveIncidents_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ActiveIncidentsvue_type_script_lang_js, [['render',ActiveIncidentsvue_type_template_id_e84e0800_render]])

/* harmony default export */ const ActiveIncidents = (ActiveIncidents_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActivePotentialTicket.vue?vue&type=template&id=93f1d39e


const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_1 = { class: "row justify-content-between px-3" }
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "w-fit-content card-title m-0 align-self-center ps-0" }, " Active Potential Ticket ", -1)
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-download" }, null, -1)
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_4 = {
  key: 0,
  class: "row justify-content-center align-self-center"
}
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "spinner-border text-info",
  role: "status"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "sr-only" }, "Loading...")
], -1)
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_6 = [
  ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_5
]
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_7 = {
  key: 1,
  class: "row"
}
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_8 = { class: "col-12 col-table" }
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_9 = { class: "content-table" }
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("thead", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Region"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Emergency"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Critical")
  ])
], -1)
const ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_11 = { class: "to-uppercase" }

function ActivePotentialTicketvue_type_template_id_93f1d39e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sections = (0,runtime_core_esm_bundler/* resolveComponent */.up)("sections")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_sections, { class: "card px-3 py-4 card-h-100 justify-content-top" }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_1, [
        ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_2,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
          class: "btn btn-download w-fit-content",
          onClick: _cache[0] || (_cache[0] = $event => ($options.ActivePotentialExport()))
        }, [
          (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Download "),
          ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_3
        ])
      ]),
      (this.loading == true)
        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_4, ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_6))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
      (this.loading == false)
        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_7, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_8, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("table", ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_9, [
                ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_10,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("tbody", null, [
                  ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.filteredPotentialTicket, (data) => {
                    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("tr", {
                      key: data.region
                    }, [
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", ActivePotentialTicketvue_type_template_id_93f1d39e_hoisted_11, (0,shared_esm_bundler/* toDisplayString */.zw)(data.region), 1),
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.potential_emergency), 1),
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.potential_critical), 1)
                    ]))
                  }), 128))
                ])
              ])
            ])
          ]))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
    ]),
    _: 1
  }))
}
;// CONCATENATED MODULE: ./src/views/sections/ActivePotentialTicket.vue?vue&type=template&id=93f1d39e

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActivePotentialTicket.vue?vue&type=script&lang=js




/* harmony default export */ const ActivePotentialTicketvue_type_script_lang_js = ({
    name: 'ActivePotentialTicket',
    data() {
        return {
            loading: false,
            potentialTicket: [],
            filteredPotentialTicket: [],

            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.GetDataPotentialTicket();
        this.CheckRefetchData();
    },
    methods: {
        ActivePotentialExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/tt_potential_export", "_blank"
            );
        },
        async GetDataPotentialTicket() {
            this.loading = true;
            spl.MessageProcessor.process({
                serviceId: 'ni_get_troubleticket',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    this.potentialTicket = json.res;
                    console.log(this.potentialTicket, 'ni get trouble ticket');
                    var filteredArray = this.potentialTicket.filter(item => item.severity.includes('Potential'));
                    console.log(filteredArray, 'Filtered array potential');

                    this.FilteredData(filteredArray);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async FilteredData(data) {
            this.filteredPotentialTicket = {};
            data.forEach(item => {
                const region = item.region;

                if (!this.filteredPotentialTicket[region]) {
                    this.filteredPotentialTicket[region] = {
                        region: region,
                        potential_emergency: 0,
                        potential_critical: 0
                    };
                }

                if (item.severity === 'Potential Emergency') {
                    this.filteredPotentialTicket[region].potential_emergency += item.tt_count;
                } else if (item.severity === 'Potential Critical') {
                    this.filteredPotentialTicket[region].potential_critical += item.tt_count;
                }
            });

            this.filteredPotentialTicket = Object.values(this.filteredPotentialTicket);

            console.log(this.filteredPotentialTicket, 'active incidents update');
        },
        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            console.log(hours, 'hours', minutes, 'minutes');
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
            console.log(this.todayDate, 'today date');
            console.log(this.lastUpdated, 'today date');
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, 'minutes only');
            this.refetch = false;
            if ([0, 30].includes(minutes)) {
                await this.UpdateLastUpdatedTime();
                await this.GetDataPotentialTicket();
                console.log('update refetch data');
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                console.log('check fetching refetch');
                this.CheckMinutes()
                this.refetch = false;
                console.log(this.refetch, 'will be false');
            }, 30 * 1000)
            console.log(this.fetching, 'check refetch data');
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/ActivePotentialTicket.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/ActivePotentialTicket.vue




;
const ActivePotentialTicket_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ActivePotentialTicketvue_type_script_lang_js, [['render',ActivePotentialTicketvue_type_template_id_93f1d39e_render]])

/* harmony default export */ const ActivePotentialTicket = (ActivePotentialTicket_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveUsers.vue?vue&type=template&id=e5a4e24a


const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_1 = { class: "row justify-content-between px-3 mb-3" }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "w-fit-content card-title m-0 align-self-center ps-0" }, " Active Users ", -1)
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-download" }, null, -1)
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_4 = { class: "row" }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_5 = { class: "col-6" }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_6 = { class: "card px-2 card-total-user d-flex flex-column justify-content-around card-100" }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Total Front Office"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Active Users")
], -1)
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_8 = {
  key: 0,
  class: "spinner-border text-info",
  role: "status"
}
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "sr-only" }, "Loading...", -1)
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_10 = [
  ActiveUsersvue_type_template_id_e5a4e24a_hoisted_9
]
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_11 = { key: 1 }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_12 = { class: "col-6" }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_13 = { class: "card px-2 card-total-ticket d-flex flex-column justify-content-around card-100" }
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Total Ticket in 1Hr", -1)
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_15 = {
  key: 0,
  class: "spinner-border text-info",
  role: "status"
}
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "sr-only" }, "Loading...", -1)
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_17 = [
  ActiveUsersvue_type_template_id_e5a4e24a_hoisted_16
]
const ActiveUsersvue_type_template_id_e5a4e24a_hoisted_18 = { key: 1 }
const _hoisted_19 = { class: "col-12" }
const _hoisted_20 = { class: "content-table mt-3" }
const _hoisted_21 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("thead", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "No."),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "Top Domain Based on Ticket Assignment")
  ])
], -1)

function ActiveUsersvue_type_template_id_e5a4e24a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sections = (0,runtime_core_esm_bundler/* resolveComponent */.up)("sections")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_sections, {
    class: "card px-3 py-4 height-100 justify-content-top",
    style: {"height":"100%"}
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_1, [
        ActiveUsersvue_type_template_id_e5a4e24a_hoisted_2,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
          class: "btn btn-download w-fit-content",
          onClick: _cache[0] || (_cache[0] = $event => ($options.ActiveUserExport()))
        }, [
          (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Download "),
          ActiveUsersvue_type_template_id_e5a4e24a_hoisted_3
        ])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_5, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_6, [
            ActiveUsersvue_type_template_id_e5a4e24a_hoisted_7,
            (this.loading == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_8, ActiveUsersvue_type_template_id_e5a4e24a_hoisted_10))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (this.loading == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h4", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_11, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.activeUser), 1)
                ]))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_12, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_13, [
            ActiveUsersvue_type_template_id_e5a4e24a_hoisted_14,
            (this.loadingTT == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_15, ActiveUsersvue_type_template_id_e5a4e24a_hoisted_17))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (this.loadingTT == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h4", ActiveUsersvue_type_template_id_e5a4e24a_hoisted_18, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.createdTT), 1)
                ]))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("table", _hoisted_20, [
            _hoisted_21,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("tbody", null, [
              ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.topDomain, (data, index) => {
                return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("tr", {
                  key: data.domain
                }, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(index + 1), 1),
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.domain), 1)
                ]))
              }), 128))
            ])
          ])
        ])
      ])
    ]),
    _: 1
  }))
}
;// CONCATENATED MODULE: ./src/views/sections/ActiveUsers.vue?vue&type=template&id=e5a4e24a

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/ActiveUsers.vue?vue&type=script&lang=js




/* harmony default export */ const ActiveUsersvue_type_script_lang_js = ({
    name: 'ActiveUsers',
    data() {
        return {
            loading: false,
            loadingTT: false,
            activeUser: [],
            updatedActiveUser: [],
            createdTT: null,
            topDomain: [],


            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.GetDataActiveUsers();
        await this.GetDataCreatedTT();
        this.CheckRefetchData();
    },
    methods: {
        ActiveUserExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/active_user_export", "_blank"
            );
        },
        async GetDataActiveUsers() {
            this.loading = true;
            spl.MessageProcessor.process({
                serviceId: 'ni_get_active_user',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json active users');
                    this.activeUser = json.res[0].user_count;
                    console.log(this.activeUser, 'ni active user');
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async GetDataCreatedTT() {
            this.loadingTT = true;
            spl.MessageProcessor.process({
                serviceId: 'ni_get_created_tt',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'ni get created tt');
                    this.createdTT = json.tt_created;
                    console.log(this.createdTT, 'created TT');
                    this.topDomain = json.top_domain.slice(0, 3);
                    console.log(this.topDomain, 'top domain slice');
                    this.loadingTT = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },

        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            console.log(hours, 'hours', minutes, 'minutes');
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
            console.log(this.todayDate, 'today date');
            console.log(this.lastUpdated, 'today date');
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, 'minutes only');
            this.refetch = false;
            if ([0, 30].includes(minutes)) {
                await this.UpdateLastUpdatedTime();
                await this.GetDataActiveUsers();
                await this.GetDataCreatedTT();
                console.log('update refetch data');
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                console.log('check fetching refetch');
                this.CheckMinutes()
                this.refetch = false;
                console.log(this.refetch, 'will be false');
            }, 30 * 1000)
            console.log(this.fetching, 'check refetch data');
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/ActiveUsers.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/ActiveUsers.vue




;
const ActiveUsers_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ActiveUsersvue_type_script_lang_js, [['render',ActiveUsersvue_type_template_id_e5a4e24a_render]])

/* harmony default export */ const ActiveUsers = (ActiveUsers_exports_);
;// CONCATENATED MODULE: ./src/assets/img/card/5g.png
const _5g_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7dtRbtMwHAbwL0nhjamDDYm3cgLGDcYJ1huwZ7RJ5QRjJ9jKBuINuEE4AT1COQF5hiH6vibmn9CHrlJTN3ZiW/t+2hSp7TT3i2M7tgMQEREREREREREFI9L94O8TvENLVIH06UdMYeDnCP1HOYZRgX4RoQ+L6srXg6Y4whlakgOZHBoFKCf2MJGyqRyH1Qtx9WNVXfm0A/RNWeP6CmdFgZGCO0EGWIa3U+B7oXAAx4IMcCfHhRych1ey3Vy07uYUx3I4hieCC1CGDa11Zk0EFeCvN9VlO4BHggowihZDFY+EFqAXHccy672wDC3OsT2ju5BV0k6mucIP2LO2fNYD3L9u75ZP1zzHN7n1+oIOBNcL+4YBGmKAhhigIQZoiAEaYoCGGKAh6wNpnbUTuVOY3s4xffapmirvxM0JhqrhHKKVNRFdumsnDx8g+3OK8ZMrXKIbQynbazRQtybi8hIeyO9FWTMQMOdtoMywfEbAfOhE+ouJ0iD50gszwPuKARpigIYYoCHtgXSTtY4kxpHyYPvFQirfIVt+wUb5tANsstYhg+SBLytpe9dI5ZAuv2ajfLyEDTFAQwzQEAM0xAANMUBDDNAQAzSkPZBu8pxIHOOFcrCFvpfgSMo72PQ5G+Vr9TkR5ej5A/V//WPjUoFu+aJ4/eJXUJewfGGr+wi1/2+B2br3wmoDIycBZnWPoQUVoExoTGRNeYJujeveDK4XzpttIW4qi2/vzuCs8iLAukZ6VVkLpS38ig5IH3O+u2H3hA8BZmUo2/xB0sMoark9LCeQ964277N2HmB5lrGl3UvMHr/HS6mJY9g3Kwq81Z1AdhlgVVCds7yOzDKPpKa8kiAnMDdTEcZxguf7H/T36zh5Yl0uvyxJkJY1CZb8HWGQz3Gw7Q6sWMmJlOag18PUZnmIiIiIiIiIiIg89A94ZL1qTgSnWQAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/assets/img/card/4g.png
const _4g_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB7dvhdaJAFAXgC6QAS8hWsGwHbgOLW8G6VuBWkKSC3TTgmgrUCmIJpANKoIE4eaMmJ+YIg74JMJ77/eEcQcTrCPOYASAiIiIiIiIiIgpGVLVivEjTOMYIDpsN8vnPfOnazvf+jux/IItRnGAAgwE8kmNayjHlx9ZdVb0pBlKJ9wYOcsBzWTi/sO/9vZLghkmCGwMM316M4JUcUyGL0wLsO9vi5IvZH2Rq0J0gA7ThJVd4NEZadcdiBEha3t8+hGcFF+BkkY5lMUZPhNcCE/eFqE1BBWi7QrK4Ro8EFaCc+4bomaAC7MuF471g+4EOS6lGnuCJrY6q1l1qgKtZls/RgiD7gX3CAJUYoBIDVGKASgxQiQEqMUAldUfalleTVXrr3DDCV3RIbkSMZEzmrFLwrDGRpqJoe1C9q1E/iuyAVoRfOEPdmAj/wkoMUIkBKjFAJQaoxACVGKASA1Sq7EhvpOMYG9zBl10l4pyd9VmMVBPSmS4OXgOyfSFwtsoA96VLDk+2MwqS7gLcT5k7mPX1e5VeQ1lF8S+sxACVGKASA1RigEoMUIkBKjFApUudXJRNdp3kWlKJqMdpLjVAO/7hrHqaPk6yeT4sAd8L6i8sdau30vJEZdWKoAKUltBFgEXVkKYVVIDyRdZy3lqjXfd1K4O7Cptnj7fY3App9bXP7QUX4LYVGjygHXfyeUXdBkH2A+Xm6FRC/NzzodxMnv1wz7MOMkBpFeX/LP8mId7DP3vF/TPL8tsmGwddiUiIUzlHfY/8XFhK+4PI/r5Iy/vX9E2tdaSbjrHUPZNxjD0nymI9Xuxuz588AytCue8e2SflSxAREREREREREV2uF8FRrkfZIl0rAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/assets/img/card/2g.png
const _2g_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN2SURBVHgB7dtfTtswHAfwn50OpP2ReoTuBJjHiTHR5w1oT7DeADgB5QSDG3QnWBlj7I0KBnucd4Mcoa8DEu8X000MNW4au04s/T5SQWqS/vnWcWz/WgBCCCGEEEIIIYQQQoLB8jaI0ysBadoB15SSkCRSdtsxOCQ+nTdhKeoA401IVBNc4nwo367JaZsa+UclAni0D4sQRSC+Xo8wyAO5uT4CC+LkcgMfbx8/mA19h8IbZ+BUAjH+nRogh6pkb5jzcwzyA5SQtTh9LD7Gv/AqUF2Afym1i93FT30KFnR/ui5lwe1CxaoP8J7AQIq3xPt9BdRAXQLM9HR/NgO21l62L9REnQIEfTGYbTEXtpLqFSBeDEytUA+tAFpQI/UKMMNYft9W4dU2Tx0DXDFsrcWF4yHDQDqSOBM5AFcivoKDXPczm2kYG+Ig/Re4EnGZtyk3wMnUJffAeYnTix6+Ej8B3qljubU+AA/qdwoHhgK0RAFaogAtUYCWKEBLFKAlCtBSA0rQC5qNhoAI561F6w9Mz0QqIz5fdIzzbJNyNZEpLyILbnkZ6w9pDxNpzlV/qDA8jfMswPdQhqEmUjhA8e16B5K0jysiTUMxz55S7uawHhTqA8XZ1T6eqoe61S0aYyMIyMwA9RJ6Cn3wI87ra+rKGKA4O2+B3yV0d8tnnphbYPIkW35qgR8DbH0DCIw5QMZ2wA8JN0/3IEC5AXor4KRwhOG1ZXd1DAHKH8akaRPHTrAwSo3wZv3dmKrlB8hVC4rJaifHhfaM2BgH4WO4eTH03uLSdIhdUvzffZxvg2WhqtRU7hGJragPNSe33gzx3/DhfeLL91bp6d0ELSZYogAtUYCWKEBLFKAlCtASBWiJArTkYiAtxMllH1xRSk4GveU12Da+ptbM/cxfpSv2VGBP4JTI5ff2BvBoxjA3pTq6BuIKS+O8TaGdwtWsVnOeO28PK8DsZ2L+GcsMQQWol74YLoP5xNiRaXN4V+FE+aybxPCbGfvj4ALUrVCpj+DHgey+ik07hDkOvL3NfiO32P4wxfAKFLmCDFB222N8c6u4ynwEzilcNVd7cnOtX2TvoGcieDrvYohtXV+xprKhCha4nr2U714fFj3K3+9EippzqDIpSo3E2Y8Wntpi7iX6rE6T4HPePZehVgYJIYQQQgghhBBCCCnoD7R6GCvR/i2kAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/NationalAvailability.vue?vue&type=template&id=6be7caff






const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_1 = { class: "row px-3 justify-content-between" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "w-fit-content card-title m-0 align-self-center ps-0" }, " National Availability (Last Day) ", -1)
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_3 = { class: "w-fit-content card-title m-0 align-self-center ps-0" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_4 = { class: "row px-3 mt-3 row-national" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_5 = { class: "card card-5g px-3 d-flex flex-row" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_6 = { class: "col-8 d-flex flex-column justify-content-center" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "5G", -1)
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_8 = {
  key: 0,
  class: "font-600"
}
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_9 = {
  key: 1,
  class: "font-600",
  style: {"font-size":"22px"}
}
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 text-end align-self-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _5g_namespaceObject,
    alt: "",
    width: "60"
  })
], -1)
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_11 = { class: "card card-4g px-3 d-flex flex-row" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_12 = { class: "col-8 d-flex flex-column justify-content-center" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "4G", -1)
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_14 = {
  key: 0,
  class: "font-600"
}
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_15 = {
  key: 1,
  class: "font-600",
  style: {"font-size":"22px"}
}
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 text-end align-self-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _4g_namespaceObject,
    alt: "",
    width: "60"
  })
], -1)
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_17 = { class: "card card-2g px-3 d-flex flex-row" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_18 = { class: "col-8 d-flex flex-column justify-content-center" }
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "2G", -1)
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_20 = {
  key: 0,
  class: "font-600"
}
const NationalAvailabilityvue_type_template_id_6be7caff_hoisted_21 = {
  key: 1,
  class: "font-600",
  style: {"font-size":"22px"}
}
const _hoisted_22 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 text-end align-self-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: _2g_namespaceObject,
    alt: "",
    width: "60"
  })
], -1)

function NationalAvailabilityvue_type_template_id_6be7caff_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sections = (0,runtime_core_esm_bundler/* resolveComponent */.up)("sections")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_sections, { class: "card px-3 py-4 card-100 justify-content-top" }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_1, [
        NationalAvailabilityvue_type_template_id_6be7caff_hoisted_2,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("h6", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_3, " Date : " + (0,shared_esm_bundler/* toDisplayString */.zw)(this.dataDate), 1)
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_5, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_6, [
            NationalAvailabilityvue_type_template_id_6be7caff_hoisted_7,
            (this.data5G == 'Data is not exist.')
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)(this.data5G), 1))
              : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_9, (0,shared_esm_bundler/* toDisplayString */.zw)(this.data5G + '%'), 1))
          ]),
          NationalAvailabilityvue_type_template_id_6be7caff_hoisted_10
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_11, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_12, [
            NationalAvailabilityvue_type_template_id_6be7caff_hoisted_13,
            (this.data4G == 'Data is not exist.')
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_14, (0,shared_esm_bundler/* toDisplayString */.zw)(this.data4G), 1))
              : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_15, (0,shared_esm_bundler/* toDisplayString */.zw)(this.data4G + '%'), 1))
          ]),
          NationalAvailabilityvue_type_template_id_6be7caff_hoisted_16
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_17, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_18, [
            NationalAvailabilityvue_type_template_id_6be7caff_hoisted_19,
            (this.data2G == 'Data is not exist.')
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_20, (0,shared_esm_bundler/* toDisplayString */.zw)(this.data2G), 1))
              : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h2", NationalAvailabilityvue_type_template_id_6be7caff_hoisted_21, (0,shared_esm_bundler/* toDisplayString */.zw)(this.data2G + '%'), 1))
          ]),
          _hoisted_22
        ])
      ])
    ]),
    _: 1
  }))
}
;// CONCATENATED MODULE: ./src/views/sections/NationalAvailability.vue?vue&type=template&id=6be7caff

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/NationalAvailability.vue?vue&type=script&lang=js




/* harmony default export */ const NationalAvailabilityvue_type_script_lang_js = ({
    name: 'NationalAvailability',
    data() {
        return {
            loading: false,
            nationalData: [],
            dataDate: null,
            data2G: null,
            data4G: null,
            data5G: null,
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.GetNationalData();

    },
    methods: {
        async GetNationalData() {
            this.loading = true;
            spl.MessageProcessor.process({
                serviceId: 'ni_get_national_availability',
                data: {},
                showErrorMessage: false,
                success: (json) => {
                    this.dataDate = json.date;
                    this.nationalData = json.res;
                    this.nationalData.forEach(data => {
                        if (typeof(parseFloat(data.avail)) == 'number'){
                            if (data.tech == '2G') {
                                this.data2G = parseFloat(data.avail).toFixed(2);
                            }
                            if (data.tech == '4G') {
                                this.data4G = parseFloat(data.avail).toFixed(2);
                            }
                            if (data.tech == '5G') {
                                this.data5G = parseFloat(data.avail).toFixed(2);
                            }
                        } else {
                            data.avail = 'Data is not exist.';
                            if ( data.tech == '2G'){
                                this.data2G = data.avail;
                            }
                            if ( data.tech == '4G'){
                                this.data4G = data.avail;
                            }
                            if ( data.tech == '5G'){
                                this.data5G = data.avail;
                            }
                        }
                    });
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/NationalAvailability.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/NationalAvailability.vue




;
const NationalAvailability_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(NationalAvailabilityvue_type_script_lang_js, [['render',NationalAvailabilityvue_type_template_id_6be7caff_render]])

/* harmony default export */ const NationalAvailability = (NationalAvailability_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/home/index.vue?vue&type=script&lang=js








/* harmony default export */ const homevue_type_script_lang_js = ({
  name: 'home',
  components: {
    ActiveCr: ActiveCr,
    ActiveDegradationTicket: ActiveDegradationTicket,
    ActiveIncidents: ActiveIncidents,
    ActivePotentialTicket: ActivePotentialTicket,
    ActiveUsers: ActiveUsers,
    NationalAvailability: NationalAvailability
  }
});

;// CONCATENATED MODULE: ./src/views/home/index.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/home/index.vue




;
const home_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(homevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const home = (home_exports_);
;// CONCATENATED MODULE: ./src/router/index.js



const router = (0,vue_router/* createRouter */.p7)({
  history: (0,vue_router/* createWebHashHistory */.r5)(),   // hash
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
  ]
});

/* harmony default export */ const src_router = (router);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/app.vue?vue&type=template&id=3ea76448


const appvue_type_template_id_3ea76448_hoisted_1 = { class: "height-main" }

function appvue_type_template_id_3ea76448_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NetworkNavbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("NetworkNavbar")
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", appvue_type_template_id_3ea76448_hoisted_1, [
    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_NetworkNavbar),
    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)
  ]))
}
;// CONCATENATED MODULE: ./src/app/app.vue?vue&type=template&id=3ea76448

;// CONCATENATED MODULE: ./assets/logo/huawei.png
const huawei_namespaceObject = __webpack_require__.p + "static/img/huawei.eacd8791.png";
;// CONCATENATED MODULE: ./src/assets/img/logo/ioh-white.png
const ioh_white_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAuCAYAAADk3cFoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApzSURBVHgB7VvNbyRHFX89M16vv6CdXYgJoK2NkCJFhB2TlQIKwm1xiohkr8iBm2cPXLjYK87IY/4B2wdOHGYsIUUgwN4c2AswY6QgEIns3UMEJGIaiRDCYnl27ezG8Xhe6rmrZmpqqrp7/DHrsfonlae7Pl69V/W66r1XZQcSnFvgBrhQuzALiDlwgInsTZ7KUNtfdr4JvqzrQIJzg4rL3KGhPuY46A6/OjaR/urWXN9L77mW6lU4SC0439hbopdEEc4B7n/pK14aYB4BsvzVxd0X+DS/3Ci/4L0DA99/EzIv/rO9sQM55/r+SqIIPYwPxhjrz2QKXAG8RmZtBPDD1/i+0N9Wv//Vt2HwB7+H1DPbanYVMvtX05CgJ0FKcKEvXeKfdFbNR1oJ9p82tjn4xzPwyfrz0D/xDjgjH8vsi1DL7CWK0INoKAE6rK3w4XWA+qC1Le4OtCtDClgKEvQcLqTT80YlIOxfhijUPxiF3Z+81szARBF6DmQYguPk4JjYf/tZqPEkkShCjyGFOBNaIbMDcfHoZ9+Rj5uJIvQaHGday6nWVQ9h8O8QFzVuPAY0YTMDCXoG29xIrPM4wT6OQPXga7CDV4E/HwaMUs4ejDg+XBr4G18U9ozuow7cuQgH749W008/XEgUoYdQy2TYA64A/69fh7o20fT+AJ+DB/AcXBreg0sxd4iPX//WwvAvfuMnW0MP4ZfjP2L/O3i5TQl0bA30w9ZQRKyQryCO+yd4/OY9OnuAZEXoEWTvvM7e2HLmx//yKFb9rSFuLgyXYGCH2wF7PB2MBAVkTF70eQzhHkB6h59HOdXDbESkPWaeJzJCyjwtOA7fbBKcKaQymdz9sRR7PJSCgY/qsdo8dL4Ig0/9IaxK9fPvv9tYEQoQKAEhxxPjaRKeILhyUthUtY6rXDmX4ByCy5rXsoqmD5HnTfEzBfjzt4dh8s5DiIOdOoOxsArorMlHUgTdHfHgyYMUYV5593k6l4oArXISygDNewISCA6j33svDsZWhDr0H6YU7BnLUwf7C41nCC4qqNiEBGcW7z5/EUqvfAaODXSKo//1fflKinATmhroi/cEZwwI2PhAf/s9F7YuR9v5fbBjXg0QfXU1IKT43rPJ01X+fJV+6R0SnDk4iOvy+fFgCpZ/PBapDIOp/7RnHirBwaS6Ggj6yAAa99kIVZsyCA8jx9MET/IKFNVd523WoANwWh7/mRJ9Ey1yY25zOkWkO3aBESvhC2WNS0vyRfTKEM0LtSFbaQKg5W7fXeIHYsAiz12wGH9KO9SyytBqI9DYFrOlVTd1UK9AUz546n4NvvvrKrz0x10j7Wf7fg59TjOyxCMLa85u7eZo1a/qdUkRivxXPcggxm9qzEoXcw7s8CFwPYshdYgWDfgitCqfTqcMgcI18kyKILwLouXBEfkSE7gKygAb2t8I+ThInkJIe0IRLG65QRHa2sr5yP7uV9MpcFb1ClIhXnjrEQw+ClzLS+m/wuX0W/RY5dvKCjc21z737/fKtk4iFUGsGCWwT5yOPG+/YCrgtEiZ8tA52hQBg1O4IsRHG19CCUox2tIXNKkrQ4fy+GBQqE4UgUDK4ICz6Fjm48uVverXNz5c/uEbPy3XMjX/C37rFmBDHEXYgMCd6wST+pJ8DCUgtCiC+ApXoXPcUuMRnA4ttUyrI5dN/Qsv87aTStujyEO0x9WVoVNFIGTvrLJU+mAOUzDhiKtq6PAxqtdX6rVMcfOVGz50ClIEbEVBKcthOyo8zdFKQV+UoT2KAVb7YGhGgSaVlnjxW7TUq2i0KoY6JUHDC+FrG4MV7nBbMZTPKf0sGcrdDuUpGeqUtLHRMS3oy+RCN4DhilDRyuidGWjkTQIp5QVDec7Cj4mWqggm5cxbaM0Z6i6JMpMiZJW2TPCtJqkIq3g8eTyl3FrWVaBFEdCs9bkQOtsmOqIMbWUWWiWtfiWkLIqWLt+2yHcNPFcwUDQWQs89AXnCxsaDJ4CwY2hmyAtzEVe092DvMgu2DOFYCSnzOqhLKGrvNJFX+L5L+7Vu1DIIPICKUAqawJxWx2QvRclzW3v34IyhI0UQg2eDXha2t21DOHyIj+oRaI3SH2E4LljaMQgmrICWLVEiRhDuzAfpunExxTRRoxFtGMQHO0J5QxH5JOb5D3kktLJshtCQy3mbPLTCQOc8nETdE0M3FMGH9sGbjmgTdlNXn6wp6IwWRU7/pWaQO8dTjqdxCJSU3ERfa+dhYEz6hj6izmfC5PE7qHtqOHVFENuJPnnzNqMIA//cAzv0/ZaMuxkLLcrPadlrooy8hryaJL8iBjJuIMmEPGUtfx4Vj0PjoVN5PNGmu0C719DmpkXQ0d0k1dL30IyCKGPit2Spp9IyWfsmWgULLSboTBvKVJd31lDunYI8LILWk40j4AkqgqW8E+i0ckcj04w3oF2hKmgOWOk8LOHR0QmtAnQBXbvFLIyyKDdLohpBqwh2a9+GBcGDpGFyHwkMzAbbLY0HikLGlccPKxS0otzgU0VXr7MLgdWLMCaQPXEDomnlwWzU6aDyG6oSKDTIfbwVQYMU5qbpmD2mPGWIcdnHCf6fsVPlPjHQoZMHrV8AWdBlDPZSr6VyyBEzBsaSajBVw+4oYBCo8Xi6IvqX9wdoq5L3A+LS8kT9a9C8C+DztBLzPgITvEyJ9q7gR94niIpVSHnU9r7of60TeTRe6HldKFyCBAkSdAkO/dGWrrJ+k0bZPlqWNG378OUybNgm1mh5xWbc3jct2Uo/vuE+g+TxMC7hWK5/CZ5cGfYVNDdF/9Ma/57YBnV+VVkkT41+o/qAYAyrYeNqk9XQPhtnezsuUti8gST31kVsPZen4Ma8KCOfdwObvq0HwT0/wqwy0dNKvopF8UvBnBIq8XsMLsB4op8cKkEVbL2IQn0X0B77Z9C6H+d4+qzkUas7b3mXx82zWp1cSB9ZpQ/Z3yo07RUmK3O6lO9BU9ZFhdasxkd3Io3Ch80p7y62Bjx0n3dOKgoG/nxOPHvYPOvPo+HIGtuDTLL+tDYY8uhWTsiGpjSHASMwy0NleeW9iOIsANsvhXT0HtGHp/B9RXlmWttpnXdRL6s8r2IzMNW1OAINdkNgYSH7JIwQoqy1oeXwmvI+I5iliVxS8mfFAGUtffsKHaqzrpWvQ/Mrc9VlVSyVDOyYEQNKck3A6SBOH+Q25jWFoF+TrEx5z0OwKrjQJZAi+KD4uZJhOpgRg6+HOWnyVEFWRPK1fXtZHORsmrs+XBrviucytA/mDCj/eKOtCNMQ7ruT2zYp7hiqvFaVVYZBNBjaQ7y2PhqQh1kQxCrkR0Ljocs6Ba3nMTLY1bUzB/oPCWJQLmd0KkdMqhGzBVFOhyO092Ud5RInQRhcOWl8iewpZbCXxErjiiWV6FDZLaW9XDIbPCiKRfUKGPyTB7X1IEbQyYAVRZYJiI7mUR+roj7hmn6RNAzCzpHy+JQnZPU0WW/rxq8cE2jaG90BNi99uoYyV5RlDfmu5ZnJpNRvy9PoMQw5aDHxYKnnmp61PlhYO01Go+xaHdeQz2w822SNej8tfAqTfQLMux/WxAAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Navbar.vue?vue&type=template&id=2e4469e4





const Navbarvue_type_template_id_2e4469e4_hoisted_1 = { class: "navbar navbar-expand-lg netdrone-nav justify-content-between px-3 py-3" }
const Navbarvue_type_template_id_2e4469e4_hoisted_2 = { class: "container-fluid" }
const Navbarvue_type_template_id_2e4469e4_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "navbar-brand" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: huawei_namespaceObject,
    width: "115px",
    class: "img-logo",
    alt: ""
  })
], -1)
const Navbarvue_type_template_id_2e4469e4_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h3", { class: "mb-0 text-white network-title" }, "MS IOH Network Insight Dashboard", -1)
const Navbarvue_type_template_id_2e4469e4_hoisted_5 = { class: "navbar-brand d-flex flex-row row-refresh" }
const Navbarvue_type_template_id_2e4469e4_hoisted_6 = { class: "d-flex flex-column" }
const Navbarvue_type_template_id_2e4469e4_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "text-white text-refresh text-end mb-2" }, "Last Updated Time", -1)
const Navbarvue_type_template_id_2e4469e4_hoisted_8 = { class: "text-white text-refresh-btm mb-0" }
const Navbarvue_type_template_id_2e4469e4_hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: ioh_white_namespaceObject,
  width: "",
  class: "img-logo",
  alt: ""
}, null, -1)

function Navbarvue_type_template_id_2e4469e4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("nav", Navbarvue_type_template_id_2e4469e4_hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", Navbarvue_type_template_id_2e4469e4_hoisted_2, [
      Navbarvue_type_template_id_2e4469e4_hoisted_3,
      Navbarvue_type_template_id_2e4469e4_hoisted_4,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", Navbarvue_type_template_id_2e4469e4_hoisted_5, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", Navbarvue_type_template_id_2e4469e4_hoisted_6, [
          Navbarvue_type_template_id_2e4469e4_hoisted_7,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("p", Navbarvue_type_template_id_2e4469e4_hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)(this.todayDate) + " | " + (0,shared_esm_bundler/* toDisplayString */.zw)(this.lastUpdated), 1)
        ]),
        Navbarvue_type_template_id_2e4469e4_hoisted_9
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=template&id=2e4469e4

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Navbar.vue?vue&type=script&lang=js

/* harmony default export */ const Navbarvue_type_script_lang_js = ({
    name: 'Navbar',
    data() {
        return {
            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        this.UpdateLastUpdatedTime();
        this.CheckRefetchData();
    },
    methods: {
        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            if ([0, 30].includes(minutes)) {
                this.UpdateLastUpdatedTime();
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                this.CheckMinutes()
            }, 30 * 1000)
        },
    }
});

;// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Navbar.vue?vue&type=style&index=0&id=2e4469e4&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=style&index=0&id=2e4469e4&lang=css

;// CONCATENATED MODULE: ./src/components/Navbar.vue




;


const Navbar_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Navbarvue_type_script_lang_js, [['render',Navbarvue_type_template_id_2e4469e4_render]])

/* harmony default export */ const Navbar = (Navbar_exports_);
;// CONCATENATED MODULE: ./src/views/getSession/session.js


async function getSessionData(splURL) {
  return new Promise((resolve, reject) => {
    var sessionData = {
      app_name: '',
      module_name: '',
      page_name: ''
    }

    var subString, arrayStr

    if (splURL.includes('/spl2/')) {
      subString = splURL.substr(splURL.indexOf('/spl2/'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[2]
        sessionData.module_name = arrayStr[2]
        sessionData.page_name = arrayStr[3]
      }
    } else if (splURL.includes('/spl/')) {
      subString = splURL.substr(splURL.indexOf('/spl/') + 5, splURL.indexOf('.spl'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[0]
        sessionData.module_name = arrayStr[0]
        sessionData.page_name = arrayStr[1]
      }
    } else if (splURL.includes('/spl-plus/')) {
      subString = splURL.substr(splURL.indexOf('/spl-plus/'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[2]
        sessionData.module_name = arrayStr[3]
        sessionData.page_name = arrayStr[4]
      }
    } else if (splURL.includes('/procodeComp/')) {
      subString = splURL.substr(splURL.indexOf('/procodeComp/'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[3]
        sessionData.module_name = arrayStr[4]
        sessionData.page_name = arrayStr.slice(5, 9).join('_')
      }
    }
    console.log(sessionData, 'sessionData');
    resolve(sessionData);
  });
}

// Function to process session data
function processSessionData(sessionData) {
  spl.MessageProcessor.process({
    serviceId: '/usage_app_log/usage_app_log/usage_app_log_session_create_submit',
    data: sessionData,
    async: false,
    success: function () {
      console.log('========== This session successfully updated')
      console.log('========== App name : ' + sessionData.app_name)
      console.log('========== Module name : ' + sessionData.module_name)
      console.log('========== Page name : ' + sessionData.page_name)
    }
  })
}

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/app.vue?vue&type=script&lang=js





/* harmony default export */ const appvue_type_script_lang_js = ({
  components: {
    NetworkNavbar: Navbar
  },
  data() {
    return {
      url: ''
    }
  },
  async mounted() {
    await spl.U.initCsrfToken();
    await this.getCurrentUrl();
    await this.fetchUserData();
  },
  methods: {
    async getCurrentUrl() {
      this.url = window.location.href;
    },
    async fetchUserData() {
      try {
        const sessionData = await getSessionData(this.url.toString());
        console.log('Session data:', sessionData);
        processSessionData(sessionData);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }

  }
});

;// CONCATENATED MODULE: ./src/app/app.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/app.vue?vue&type=style&index=0&id=3ea76448&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/app/app.vue?vue&type=style&index=0&id=3ea76448&lang=css

;// CONCATENATED MODULE: ./src/app/app.vue




;


const app_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(appvue_type_script_lang_js, [['render',appvue_type_template_id_3ea76448_render]])

/* harmony default export */ const app = (app_exports_);
;// CONCATENATED MODULE: ./src/directives/sample.js
function directiveSample() {
  // 此处按需要实现，不需要可删除
}

/* harmony default export */ const sample = ({
  bind: directiveSample,
  update: directiveSample
});

;// CONCATENATED MODULE: ./src/directives/index.js


function initDirectives(app) {
  app.directive("directive-sample", sample);
};
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav/index.vue?vue&type=template&id=87f38fe6&scoped=true

function navvue_type_template_id_87f38fe6_scoped_true_render(_ctx, _cache) {
  return null
}
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav/index.vue?vue&type=style&index=0&id=87f38fe6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/nav/index.vue?vue&type=style&index=0&id=87f38fe6&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/nav/index.vue

const script = {}

;


const nav_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',navvue_type_template_id_87f38fe6_scoped_true_render],['__scopeId',"data-v-87f38fe6"]])

/* harmony default export */ const nav = (nav_exports_);
;// CONCATENATED MODULE: ./src/components/index.js

// import Navbar from '.'

function initComponents(app) {
  app.component("CNav", nav);
  // app.component('Navbar', )
}

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 5 modules
var vuex_esm_bundler = __webpack_require__(33907);
;// CONCATENATED MODULE: ./src/store/mutation-types.js
const AGE_INCREASE = "AGE_INCREASE";

;// CONCATENATED MODULE: ./src/store/actions.js


/* 增加年龄 */
const ageIncrease = function ({ commit }) {
  setTimeout(() => {
    commit(AGE_INCREASE);
  }, 3000);
};

;// CONCATENATED MODULE: ./src/store/getters.js
// 获取名字
const getters_name = (state) => state.name;

;// CONCATENATED MODULE: ./src/store/state.js
const state = {
  name: "test",
  age: 18
};

/* harmony default export */ const store_state = (state);

;// CONCATENATED MODULE: ./src/store/mutations.js


const mutations = {
  [AGE_INCREASE](state) {
    state.age++;
  }
};

/* harmony default export */ const store_mutations = (mutations);

;// CONCATENATED MODULE: ./src/store/index.js






const debug = "production" !== "production";

function initStore(app){
  const store = (0,vuex_esm_bundler/* createStore */.MT)({
    actions: actions_namespaceObject,
    getters: getters_namespaceObject,
    state: store_state,
    mutations: store_mutations,
    strict: debug,
    plugins: debug ? [(0,vuex_esm_bundler/* createLogger */.hu)()] : []
  });
  app.use(store);
}
;// CONCATENATED MODULE: ./src/app/index.js


// 只使用@adc/vigour-ui能力不用具体组件只需引入core.css即可。
// 否则按需引入 import "@adc/vigour-ui/lib/style/index.css";






  

// 加载ADC主题样式变量
spl.U.loadCurrentTheme().then(() => {
  // 加载自定义主题样式变量
  let theme = spl.U.getCurrentThemeName();
  if (theme && theme !== "light") {
    let id = "demo-theme-style";
    let styleTag = document.getElementById(id);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.setAttribute("id", id);
      document.body.appendChild(styleTag);
    }
    styleTag.innerText = __webpack_require__(18049)(`./${theme}.css`);
  }
});

const i18n = spl.U.initI18n();

const app_app = (0,runtime_dom_esm_bundler/* createApp */.ri)(app);

app_app.use(i18n)
  .use(src_router);

initComponents(app_app);
initDirectives(app_app);
initStore(app_app);

app_app.mount("#app");

/***/ }),

/***/ 18049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dark.css": [
		84323,
		323
	],
	"./default.css": [
		72658,
		658
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 18049;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24654:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + (chunkId === 619 ? "lang-es_LA-js" : chunkId) + "." + {"323":"f5100160","619":"5f5ef0c7","658":"d284148f"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/css/" + chunkId + "." + "8197c8d1" + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "network_insight:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"323":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknetwork_insight"] = self["webpackChunknetwork_insight"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], () => (__webpack_require__(70274)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;