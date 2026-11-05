import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  TuiButton,
  TuiIcon,
  TuiTitle,
  TuiCell,
} from '@taiga-ui/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

export interface Metric {
  title: string;
  value: string;
  subtitle: string;
  sparkline: number[];
  color: string;
}

@Component({
  standalone: true,
  imports: [
    DatePipe,
    TuiButton,
    TuiIcon,
    TuiHeader,
    TuiTitle,
    TuiCardLarge,
    TuiTable,
    TuiCell,
  ],
  selector: 'app-analytics',
  templateUrl: './analytics.html',
  styleUrl: './analytics.css',
})
export class Analytics {
  protected readonly today = new Date();

  protected readonly metrics = signal<Metric[]>([
    {
      title: 'Page views',
      value: '128,432',
      subtitle: '+24% vs last week',
      sparkline: [30, 52, 45, 70, 60, 85, 95, 80, 110, 130],
      color: 'var(--tui-color-indigo-500, #6366f1)',
    },
    {
      title: 'Sessions',
      value: '42,105',
      subtitle: '+12% vs last week',
      sparkline: [20, 35, 28, 50, 42, 60, 70, 58, 85, 95],
      color: 'var(--tui-color-blue-500, #3b82f6)',
    },
    {
      title: 'Bounce rate',
      value: '42.3%',
      subtitle: '-3.1% vs last week',
      sparkline: [55, 48, 52, 45, 50, 44, 40, 43, 38, 42],
      color: 'var(--tui-color-amber-500, #f59e0b)',
    },
    {
      title: 'Avg. session',
      value: '4m 12s',
      subtitle: '+11s vs last week',
      sparkline: [180, 210, 195, 240, 230, 260, 250, 270, 290, 310],
      color: 'var(--tui-color-emerald-500, #10b981)',
    },
  ]);

  protected readonly topPages = signal<Array<{ name: string; views: number; change: number }>>([
    { name: '/dashboard', views: 24, change: 12 },
    { name: '/analytics', views: 18, change: -5 },
    { name: '/customers', views: 14, change: 22 },
    { name: '/settings', views: 9, change: -2 },
    { name: '/products', views: 6, change: 8 },
  ]);

  protected readonly barHeight = (value: number, data: number[]): number => {
    const max = Math.max(...data);
    return Math.round((value / max) * 100);
  };

  protected readonly chartPoints = signal<Array<{ x: number; y: number }>>([
    { x: 50, y: 195 },
    { x: 120, y: 150 },
    { x: 190, y: 205 },
    { x: 260, y: 120 },
    { x: 330, y: 175 },
    { x: 400, y: 105 },
    { x: 470, y: 160 },
    { x: 540, y: 90 },
    { x: 610, y: 130 },
    { x: 680, y: 80 },
  ]);

  protected readonly axisLabels = signal([
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
  ]);

  protected readonly axisX = (index: number): number => 50 + index * 70;
}
