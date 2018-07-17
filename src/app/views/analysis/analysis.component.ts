import { Component, OnInit ,Input,Output, EventEmitter, HostListener} from '@angular/core';

import { Chart } from "angular-highcharts";

import { DashboardService} from "../../services/dashboard.service";

import { Router,ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  token:any;
  dashresult:any;
  chart:any;
  chartt:any;
  model: any = {};
  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  // PolarArea
  public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  constructor(private dashService: DashboardService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    var token= localStorage.getItem('token');
    this.token = token.replace(/\"/g, "");
    this.dashService.dashboard(this.token).subscribe(result=>{this.dashresult=result});
    this.chart = new Chart({
      chart:{
        type:"line"
      },
      title:{
        text: "Daily"
      },
      credits:{
        enabled:false
      },
      xAxis: {
        categories: ['6','7', '8', '9','10','11','12','13','14','15','16','17','18']
     },
     series:[{
      name:"solar power",
      data:[30,50,48,60,40,35,18,63,88,52,63,43,24]
    },
    {
    name:"consumption by load",
    data:[5,15,18,10,13,18,8,13,18,11,13,23,5]
  }
  ]
    });
    this.chartt = new Chart({
      chart:{
        type:"line"
      },
      title:{
        text: "Daily"
      },
      credits:{
        enabled:false
      },
      xAxis: {
        categories: ['6','7', '8', '9','10','11','12','13','14','15','16','17','18']
     },
      series:[{
            name:"consumption by load",
            data:[5,15,18,10,13,18,8,13,18,11,13,23,5]
          },
          {
          name:"energy send to grid",
          data:[25,35,30,50,27,17,10,50,70,41,50,20,19]
        }
        ]
    });
  }
  options = ["Weekly", "Montly"];
  optionSelected: any;

onOptionsSelected(event){
 console.log(event); //option value will be sent as event
 
  if(event=="Weekly"){
        this.chart = new Chart({
          chart:{
            type:"line"
          },
          title:{
            text: "Weekly"
          },
          credits:{
            enabled:false
          },
          xAxis: {
            categories: ['10','11','12','13','14','15','16']
         },
          series:[{
            name:"solar power",
            data:[50,20,45,35,80,55,41]
          },
          {
          name:"consumption by load",
          data:[15,10,17,14,25,19,25]
        }
        ]
      });
      this.chartt = new Chart({
        chart:{
          type:"line"
        },
        title:{
          text: "Weekly"
        },
        credits:{
          enabled:false
        },
        xAxis: {
          categories: ['10','11','12','13','14','15','16']
       },
        series:[{
          name:"consumption by load",
          data:[15,10,17,14,25,19,25]
        },
        {
        name:"energy sent to grid",
        data:[35,10,28,21,55,36,16]
      }
      ]
      });
}
 else if(event=="Montly"){
          this.chart = new Chart({
            chart:{
              type:"line"
            },
            title:{
              text: "Montly"
            },
            credits:{
              enabled:false
            },
            xAxis: {
              categories: ['1', '2', '3','4']
           },
            series:[{
              name:"solar power",
              data:[50,20,45,35]
            },
            {
            name:"consumption by load",
            data:[5,10,15,5]
          }
          ]
        });
        this.chartt = new Chart({
          chart:{
            type:"line"
          },
          title:{
            text: "Montly"
          },
          credits:{
            enabled:false
          },
          xAxis: {
            categories: ['1', '2', '3','4']
         },
          series:[{
            name:"consumption by load",
            data:[5,10,15,5]
          },
          {
          name:"energy sent to grid",
          data:[45,10,30,30]
        }
        ]
        });
 }
 else{

  this.chart = new Chart({
    chart:{
      type:"line"
    },
    title:{
      text: "Daily"
    },
    credits:{
      enabled:false
    },
    xAxis: {
      categories: ['6','7', '8', '9','10','11','12','13','14','15','16','17','18']
   },
    series:[{
      name:"solar power",
      data:[30,50,48,60,40,35,18,63,88,52,63,43,24]
    },
    {
    name:"consumption by load",
    data:[5,15,18,10,13,18,8,13,18,11,13,23,5]
  }
  ]
});
this.chartt = new Chart({
  chart:{
    type:"line"
  },
  title:{
    text: "Daily"
  },
  credits:{
    enabled:false
  },
  xAxis: {
    categories: ['6','7', '8', '9','10','11','12','13','14','15','16','17','18']
 },
  series:[{
    name:"consumption by load",
    data:[5,15,18,10,13,18,8,13,18,11,13,23,5]
  },
  {
  name:"energy send to grid",
  data:[25,35,30,50,27,17,10,50,70,41,50,20,19]
}
]
});
}
}
}
