(function ($) {
  "use strict";
// menu toggle
  document.getElementById("sideBarBtn-ham").addEventListener("click",()=>{
    document.querySelector(".mobile-menu").classList.toggle("siteBar")
  })
  document.getElementById("sideBarBtn-cross").addEventListener("click",()=>{
    document.querySelector(".mobile-menu").classList.toggle("siteBar")
  })

  function CountDown() {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  }
  CountDown();

})(jQuery);



// dounut chart
var options = {
  chart: {
    width: "100%",
    type: "donut",
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      }
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "90%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  colors: [
    "#D246DD",
    "#7C2CE2",
    "#00A4E9",
    "#47B735",
    "#cfa5ef",
    "#0afc00",
    "#B3C83C",
    "#EDDB5C",
    "#F0B63C",
    "#F5912F",
    "#FD6191",
    "#F24B40",
  ],
  series: [6, 10, 3, 15, 5, 10, 12, 8, 5, 10, 12, 4],
  labels: ["Liquidity", "Operational", "Early Bird", "Rewards for Analysts", "Airdrops", "Treasury", "Private round", "Team", "Advisors", "Marketing", "Seed round", "Public round"],
  legend: {
    show: false,
    position: "right",
    fontSize: 12,
    fontWeight: 600,
  },
};
var chart = new ApexCharts(document.querySelector("#donutChart1"), options);

chart.render();

// line chart
var options = {
  chart: {
    width: "100%",
    height: 450,
    type: "line",
    stacked: false,
    toolbar: false,
    foreColor: "white",
  },
  responsive: [{
    breakpoint: 1000,
    options: {
      chart: {
        height: 250
      }
    },
  }],
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "USD";
      }
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value;
      }
    }
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#55E39D", "#C22DB3"],
  series: [{
      name: "HODL",
      type: "line",
      data: [
        10000, 12457, 11680, 11862, 15703, 20592, 44726, 38105, 54353, 65473,
        64250, 39286, 37276, 46066, 57551, 48684, 67853, 63240, 48506, 46112,
        48835, 51427, 39446, 33104, 21380, 25897, 22362, 21160, 22757, 18988,
      ],
    },
    {
      name: "Rosy Portfolio",
      type: "line",
      data: [
        10000, 13412, 12111, 13451, 18541, 25412, 58513, 56431, 59851, 75432,
        71341, 65431, 61413, 64321, 67432, 62311, 73412, 71421, 69641, 67821,
        64431, 64521, 62131, 60421, 57531, 55111, 52312, 51241, 50223, 49412,
      ],
    },
  ],
  stroke: {
    width: [5, 5, 5],
    curve: "smooth",
  },
  legend: {
    show: true,
    fontSize: 18,
    fontFamily: 'Poppins',
    itemMargin: {
      horizontal: 15,
      vertical: 0
    },
    onItemClick: {
      toggleDataSeries: false
    },
    markers: {
      width: 15,
      height: 15,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 2,
      customHTML: undefined,
      onClick: undefined,
      offsetX: -5,
      offsetY: 0,

    },
    position: 'top'
  },
  markers: {
    size: 0,
    strokeWidth: 0,
  },
  xaxis: {
    categories: [
      "2020-07",
      "2020-08",
      "2020-09",
      "2020-10",
      "2020-11",
      "2020-12",
      "2021-01",
      "2021-02",
      "2021-03",
      "2021-04",
      "2021-05",
      "2021-06",
      "2021-07",
      "2021-08",
      "2021-09",
      "2021-10",
      "2021-11",
      "2021-12",
      "2022-01",
      "2022-02",
      "2022-03",
      "2022-04",
      "2022-05",
      "2022-06",
      "2022-07",
      "2022-08",
      "2022-09",
      "2022-10",
      "2022-11",
      "2022-12",
    ],
    axisBorder: {
      show: false,
    },

  },
};

var chart = new ApexCharts(document.querySelector("#multiCharts"), options);
chart.render()



// dougnut hover
window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
};
window.onresize = function () {
  location.reload();
};

// dougnut chart hover
document.getElementById("SvgjsG1019").addEventListener("mouseover", function () {
  document.getElementById("tknBlk11").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1019").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk11").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1021").addEventListener("mouseover", function () {
  document.getElementById("tknBlk12").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1021").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk12").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1023").addEventListener("mouseover", function () {
  document.getElementById("tknBlk3").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1023").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk3").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1025").addEventListener("mouseover", function () {
  document.getElementById("tknBlk4").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1025").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk4").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1027").addEventListener("mouseover", function () {
  document.getElementById("tknBlk5").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1027").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk5").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1029").addEventListener("mouseover", function () {
  document.getElementById("tknBlk6").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1029").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk6").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1011").addEventListener("mouseover", function () {
  document.getElementById("tknBlk9").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1011").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk9").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1015").addEventListener("mouseover", function () {
  document.getElementById("tknBlk1").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1015").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk1").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1017").addEventListener("mouseover", function () {
  document.getElementById("tknBlk2").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1017").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk2").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1013").addEventListener("mouseover", function () {
  document.getElementById("tknBlk10").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1013").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk10").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1031").addEventListener("mouseover", function () {
  document.getElementById("tknBlk7").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1031").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk7").classList.remove("tknBlkShow");
});

document.getElementById("SvgjsG1033").addEventListener("mouseover", function () {
  document.getElementById("tknBlk8").classList.add("tknBlkShow");
});
document.getElementById("SvgjsG1033").addEventListener("mouseleave", function () {
  document.getElementById("tknBlk8").classList.remove("tknBlkShow");
});

// nav active toggle
var btnContainer = document.getElementById("menu");

var btns = btnContainer.getElementsByClassName("navLinks");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
