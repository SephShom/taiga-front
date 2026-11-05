import { Component, signal, computed, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {
  TuiRoot,
  TuiIcon,
} from '@taiga-ui/core';
import { TuiBadge, TuiAvatar } from '@taiga-ui/kit';

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TuiRoot,
    TuiBadge,
    TuiAvatar,
    TuiIcon,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  protected readonly collapsed = signal(false);
  protected readonly userName = signal('Alex Inkin');
  protected readonly userRole = signal('Product Designer');
  protected readonly userInitial = computed(() =>
    this.userName().charAt(0).toUpperCase(),
  );

  protected readonly menuItems = signal<MenuItem[]>([
    { label: 'Dashboard', icon: '@tui.home', route: '/dashboard' },
    { label: 'Analytics', icon: '@tui.pie-chart', route: '/analytics' },
    { label: 'Customers', icon: '@tui.users', route: '/customers', badge: 12 },
    { label: 'Orders', icon: '@tui.shopping-cart', route: '/orders' },
    { label: 'Products', icon: '@tui.cube', route: '/products' },
    { label: 'Settings', icon: '@tui.settings', route: '/settings' },
  ]);

  protected isRouteActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  protected toggleSidebar(): void {
    this.collapsed.update((c) => !c);
  }
}
