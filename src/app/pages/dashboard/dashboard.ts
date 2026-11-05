import { Component, signal, computed } from '@angular/core';
import { AsyncPipe, DatePipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  TuiButton,
  TuiIcon,
  TuiTitle,
  TuiCell,
} from '@taiga-ui/core';
import { TuiBadge, TuiAvatar } from '@taiga-ui/kit';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

export interface StatCard {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  color: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  status: string;
}

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    SlicePipe,
    RouterLink,
    TuiButton,
    TuiBadge,
    TuiAvatar,
    TuiIcon,
    TuiHeader,
    TuiTitle,
    TuiCardLarge,
    TuiTable,
    TuiCell,
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly today = new Date();

  protected readonly userName = signal('Alex Inkin');

  protected readonly stats = signal<StatCard[]>([
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+12% vs last month',
      positive: true,
      icon: '@tui.trending-up',
      color: 'var(--tui-color-emerald-500, #10b981)',
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+8% vs last month',
      positive: true,
      icon: '@tui.shopping-cart',
      color: 'var(--tui-color-indigo-500, #6366f1)',
    },
    {
      title: 'Customers',
      value: '3,456',
      change: '+15% vs last month',
      positive: true,
      icon: '@tui.users',
      color: 'var(--tui-color-blue-500, #3b82f6)',
    },
    {
      title: 'Conversion',
      value: '3.4%',
      change: '-2% vs last month',
      positive: false,
      icon: '@tui.percent',
      color: 'var(--tui-color-rose-500, #f43f5e)',
    },
  ]);

  protected readonly activities = signal<Activity[]>([
    {
      id: '1',
      user: 'Sarah Jenkins',
      action: 'completed the onboarding tutorial',
      time: '2 min ago',
      status: 'active',
    },
    {
      id: '2',
      user: 'Marcus Lee',
      action: 'upgraded to Pro plan',
      time: '15 min ago',
      status: 'active',
    },
    {
      id: '3',
      user: 'Elena Rossi',
      action: 'requested a feature demo',
      time: '1 hour ago',
      status: 'pending',
    },
    {
      id: '4',
      user: 'David Kim',
      action: 'left a review (5 stars)',
      time: '3 hours ago',
      status: 'active',
    },
    {
      id: '5',
      user: 'Olivia Brown',
      action: 'canceled subscription',
      time: '5 hours ago',
      status: 'inactive',
    },
  ]);

  protected readonly quickActions = signal<Array<{ label: string; icon: string; route: string }>>([
    { label: 'New Order', icon: '@tui.plus', route: '/orders' },
    { label: 'Add Customer', icon: '@tui.user-plus', route: '/customers' },
    { label: 'Export Report', icon: '@tui.export', route: '/analytics' },
    { label: 'Team Settings', icon: '@tui.settings', route: '/settings' },
  ]);

  protected readonly statusLabel = computed(() => new Map([
    ['active', 'Online'],
    ['pending', 'Pending'],
    ['inactive', 'Offline'],
  ]));
}
