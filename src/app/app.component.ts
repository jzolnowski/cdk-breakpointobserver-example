import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  breakpointsInfo: {name: string, value: MediaQueryList}[] = [];
  breakpointState: Observable<BreakpointState> | undefined;
  xSmall: string = Breakpoints.XSmall;
  small: string = Breakpoints.Small;
  medium: string = Breakpoints.Medium;
  large: string = Breakpoints.Large;
  xLarge: string = Breakpoints.XLarge;
  webLandscape: string = Breakpoints.WebLandscape;

  constructor(public breakpointObserver: BreakpointObserver, private mediaMatcher: MediaMatcher) {}

  ngOnInit(): void {
    this.breakpointsInfo = this.getBreakpointsInfo();

    this.breakpointState = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
    ])
  }

  getBreakpointsInfo(): {name: string, value: MediaQueryList}[] {
    return [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Tablet,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ].map((breakpoint, index) => ({name: Object.keys(Breakpoints)[index],value: this.mediaMatcher.matchMedia(breakpoint)}));
  }
}
