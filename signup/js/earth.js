$(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
echarts_3()
// echarts_4()


function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart2'));
var data = ['269','132','131','112','103','98','97','86','75','66','64','59','46','34','26','15','14','13','11','10'];
var titlename = ['国际护理学院','信息工程学院','机电工程学院','城建学院','临床医药学院','公共教学部','财经学院','会计学院','马克思主义学院','设计学院','海事学院','化学与材料工程学院','传媒与音乐学院','基础医学部','健康科学学院','后勤管理处','教务处','工商学院','学校办公室','图书馆'];
option = {
	grid: {
        left: '0',
		top:'0',
        right: '0',
        bottom: '-15',
       containLabel: true
    },
    tooltip: {  
        trigger: 'axis', // 触发类型，默认数据项触发，可选为：'item' | 'axis'  
        formatter: function (params) {  
            // params 是一个数组，包含了当前数据点的所有信息  
            // 假设我们想要显示系列名和数据值  
            let res = params[0].seriesName + '<br/>'; // 显示系列名  
            res += params[0].name + ' : ' + params[0].value+'人'; // 显示数据项的名字和值  
            return res;  
        }  
    },  
    toolbox: {
        show: true,
        right:'4%',
        top:'8%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        iconStyle:{
            //color:'black',
            borderColor:'#fff'
          }
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick:{ show: false},
        axisLabel: {
            textStyle: {
                color:'#fff'
            },
        },

    }, {
        show: false,
        inverse: true,
        data: data,
        axisLabel: {textStyle: {color: '#fff'}},
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick: { show: false},
    }],
    series: [{
        name: '人数',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        itemStyle: {
            normal: {
               barBorderRadius: 50,
                color:'#1089E7',
            }
        },
        label: {
           normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
			   textStyle: {color: 'rgba(255,255,255,.5)'}
            }
        },
    }]
};

// 轮播开始
var app = {
    currentIndex: -1,
};

var timeOut = null;
autoMoven();
function autoMoven() {
    timeOut = setInterval(function () {
        var dataLen = data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
    }, 1000);
}
function stop(){
    clearInterval(timeOut)
}

myChart.on('mouseover',stop);
myChart.on('mouseout',autoMoven);
// 轮播结束

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }



//雷达图
// 	function echarts_4() {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.getElementById('echart4'));
//         option = {
//             legend: {
        
//                 top: 0,
        
//                 textStyle: {
        
//                 color: "#fff",
        
//             },
        
//             itemWidth: 10,  // 设置宽度
        
//             itemHeight: 10, // 设置高度
        
//             },
//             tooltip: {
//                 trigger: 'axis'
//             },
//             toolbox: {
//                 show: true,
//                 right:'4%',
//                 top:'4%',
//                 feature: {
//                     mark: {
//                         show: true
//                     },
//                     dataView: {
//                         show: true,
//                         readOnly: false
//                     },
//                     magicType: {
//                         show: true,
//                         type: ['pie', 'funnel']
//                     },
//                     restore: {
//                         show: true
//                     },
//                     saveAsImage: {
//                         show: true
//                     }
//                 },
//                 iconStyle:{
//                     //color:'black',
//                     borderColor:'#fff'
//                   }
//             },
//             radar: [{
//                 indicator: [{
//                     text: '专任教师',
//                     max: 800
//                 }, {
//                     text: '行政人员',
//                     max: 150
//                 }, {
//                     text: '教辅人员',
//                     max: 100
//                 }, {
//                     text: '工勤人员',
//                     max: 10
//                 }, {
//                     text: '校外教师',
//                     max: 100
//                 },{
//                     text: '行业导师',
//                     max: 222
//                 }],
//                 textStyle: {
//                     color: 'red'
//                 },
//                 center: ['50%', '55%'],
//                 radius: '70%',
//                 startAngle: 90,
//                 splitNumber: 4,
//                 shape: 'circle',
            
//                 name: {
//                     padding:-5,
//                     formatter: '{value}',
//                     textStyle: {
                      
//                         color: 'rgba(255,255,255,.5)'
//                     }
//                 },
//                 splitArea: {
//                     areaStyle: {
//                         color: 'rgba(255,255,255,.05)'
//                     }
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: 'rgba(255,255,255,.05)'
//                     }
//                 },
//                 splitLine: {
//                     lineStyle: {
//                         color: 'rgba(255,255,255,.05)'
//                     }
//                 }
//             }, ],
//             series: [{
//                 name: '雷达图',
//                 type: 'radar',
//                 tooltip: {
//                     trigger: 'item'
//                 },
//                 data: [{
//                     name: '美兰校区',
//                     value: [723, 109, 68, 8, 92,187],
//                     lineStyle: {
//                         normal: { 
//                             color:'#03b48e',
//                             width:2,
//                         }
//                     },
//                     areaStyle: {
//                         normal: {
//                             color: '#03b48e',
//                             opacity:.4
//                         }
//                     },
//                     symbolSize: 0,
                  
//                 }, {
//                     name: '云龙校区',
//                     value: [682, 58, 68, 5, 20,201],
//                     symbolSize: 0,
//                     lineStyle: {
//                         normal: { 
//                             color:'#3893e5',
//                             width:2,
//                         }
//                     },
//                          areaStyle: {
//                         normal: {
//                             color: 'rgba(19, 173, 255, 0.5)'
//                         }
//                     }
//                 }]
//             }, ]
//         };

// // 轮播开始
// var app = {
//     currentIndex: 0,
// };

// var timeOut = null;
// autoMoven();
// function autoMoven() {
//     timeOut = setInterval(function () {
//         var dataLen = 1;

//         // 取消之前高亮的图形
//         myChart.dispatchAction({
//             type: 'downplay',
//             seriesIndex: 0,
//             dataIndex: app.currentIndex,
//         });
//         app.currentIndex = (app.currentIndex + 1) % dataLen;
//         //console.log(app.currentIndex);
//         // 高亮当前图形
//         myChart.dispatchAction({
//             type: 'highlight',
//             seriesIndex: 0,
//             dataIndex: app.currentIndex,
//         });
//         // 显示 tooltip
//         myChart.dispatchAction({
//             type: 'showTip',
//             seriesIndex: 0,
//             dataIndex: app.currentIndex,
//         });
//     }, 1000);
// }
// function stop(){
//     clearInterval(timeOut)
// }

// myChart.on('mouseover',stop);
// myChart.on('mouseout',autoMoven);
// // 轮播结束

//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }


})




// 折线图
function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart1'));
option = {
            legend: {
                icon:"circle",
                top: "5.2%",
                width:'100%',
                right: 'center',
                itemWidth: 10,
                itemHeight: 10,
             data: ['2022', '2023'],
             textStyle: {
                 color: "rgba(255,255,255,.5)" },
         },
         toolbox: {
            show: true,
            right:'4%',
            top:'4%',
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            },
            iconStyle:{
                //color:'black',
                borderColor:'#fff'
              }
        },
             tooltip: {
             trigger: 'axis',
             axisPointer: {
                 lineStyle: {
                     color: '#dddc6b'
                 }
             }
         },
         grid: {
             left: '25',
             top: '30',
             right: '50',
             bottom: '15',
             containLabel: true
         },
     
         xAxis: [{
             type: 'category',
             boundaryGap: false,
     axisLabel:  {
                     textStyle: {
                          color: "rgba(255,255,255,.5)",
                        //  fontSize:10
                     },
                 },
             axisLine: {
                 lineStyle: { 
                     color: 'rgba(255,255,255,.1)'
                 }
             },
        data: ['教学管理人员', '教学质量监控人员', '就业管理人员', '心理咨询工作人员', '学生管理人员', '专职党务工作人员']
     
         }, {
     
             axisPointer: {show: false},
             axisLine: {  show: false},
             position: 'bottom',
             offset: 20,
     
            
     
         }],
     
         yAxis: [{
             type: 'value',
             axisTick: {show: false},
             splitNumber: 4,
             axisLine: {
                 lineStyle: {
                     color: 'rgba(255,255,255,.1)'
                 }
             },
            axisLabel:  {
                     textStyle: {
                          color: "rgba(255,255,255,.5)",
                          //fontSize:10
                     },
                 },
     
             splitLine: {
                 lineStyle: {
                      color: 'rgba(255,255,255,.1)',
           type: 'dotted',
                 }
             }
         }],
         series: [
             {
             name: '2022',
             type: 'line',
           smooth: true,
             symbol: 'circle',
             symbolSize: 5,
             showSymbol: false,
             lineStyle: {
                 
                 normal: {
                     color: 'rgba(31, 174, 234, 1)',
                     width: 2
                 }
             },
             areaStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(31, 174, 234, 0.4)'
                     }, {
                         offset: 0.8,
                         color: 'rgba(31, 174, 234, 0.1)'
                     }], false),
                     shadowColor: 'rgba(0, 0, 0, 0.1)',
                 }
             },
                 itemStyle: {
                 normal: {
                     color: '#1f7eea',
                     borderColor: 'rgba(31, 174, 234, .1)',
                     borderWidth: 5
                 }
             },
             data: [4, 1, 1, 2, 1, 4]
     
         }, 
     {
             name: '2023',
             type: 'line',
           smooth: true,
             symbol: 'circle',
             symbolSize: 5,
             showSymbol: false,
             lineStyle: {
                 
                 normal: {
                     color: '#6bdd9b',
                     width: 2
                 }
             },
             areaStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(107, 221, 155, 0.4)'
                     }, {
                         offset: 0.8,
                         color: 'rgba(107, 221, 155, 0.1)'
                     }], false),
                     shadowColor: 'rgba(0, 0, 0, 0.1)',
                 }
             },
                 itemStyle: {
                 normal: {
                     color: '#6bdd9b',
                     borderColor: 'rgba(107, 221, 155, .1)',
                     borderWidth: 5
                 }
             },
             data: [ 9, 3, 2, 3, 5, 5]
     
         }, 
              ]
     
     };
     // 轮播开始
  var app = {
    currentIndex: -1,
};

var timeOut = null;
autoMoven();
function autoMoven() {
    timeOut = setInterval(function () {
        var dataLen = 6;

        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
    }, 1000);
}
function stop(){
    clearInterval(timeOut)
}

myChart.on('mouseover',stop);
myChart.on('mouseout',autoMoven);
// 轮播结束
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}








