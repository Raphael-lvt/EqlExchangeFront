import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {createChart} from 'lightweight-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input()
  public symbolPair!: string;

  @Input()
  public width!: number;

  @Input()
  public height!: number;

  public data$!: Promise<any>;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.data$ = fetch(`https://api.binance.com/api/v3/klines?symbol=${this.symbolPair}&interval=1m&limit=1000`);
    this.dochart();
  }

  public ngOnInit(): void {
    this.height;
    this.width;
  };


  public price: number | undefined ;

  dochart() {

    const log = console.log;

    const chartProperties = {
      width: this.width,
      height: this.height,
      layout: {
        backgroundColor: '#0b1217',
        lineColor: '#0dcaf0',
        textColor: '#D9D9D9',
      },
      grid: {
        vertLines: {
          color: '#142028',
        },
        horzLines: {
          color: '#142028'
        }
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      }
    }

    const domElement = document.getElementById('tvchart') || '';
    const chart = createChart(domElement, chartProperties);
    const candleSeries = chart.addCandlestickSeries();


    this.data$.then(res => res.json())
      .then(data => {
        const cdata = data.map((d: string[]) => {
          this.price = parseFloat(d[1]);
          return {

            time: parseFloat(d[0]) / 1000,
            open: parseFloat(d[1]),
            high: parseFloat(d[2]),
            low: parseFloat(d[3]),
            close: parseFloat(d[4])
          }
        });
        candleSeries.setData(cdata);

      })
      .catch(err => log(err))

  }


}
