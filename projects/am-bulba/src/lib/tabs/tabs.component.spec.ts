import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { ChangeDetectorRef, Component } from "@angular/core";
import { TabsPositionType, TabsSizeType, TabsViewType } from "./tabs.type";
import { TabsModule } from "./tabs.module";

describe('TabsComponent', () => {
  let component: TabsTestComponent;
  let fixture: ComponentFixture<TabsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsModule],
      declarations: [TabsTestComponent],
      providers: [ChangeDetectorRef]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  template: `
      <am-tabs-group [size]="size" [position]="position" [viewType]="viewType" [rounded]="rounded">
          <am-tab label="Tab 1">
              <am-tab-label>
                <span class="icon is-small">
                    <i class="fas fa-image" aria-hidden="true"></i>
                </span> <span>Pictures</span>
              </am-tab-label>
              <h3><i class="fas fa-image" aria-hidden="true"></i> tab content with Pictures</h3>
          </am-tab>
          <am-tab label="Tab 2">
              <am-tab-label>
                <span class="icon is-small">
                    <i class="fas fa-music" aria-hidden="true"></i>
                </span> <span>Music</span>
              </am-tab-label>

              <h3><i class="fas fa-music" aria-hidden="true"></i> tab content with Music</h3>
          </am-tab>
          <am-tab label="Tab 3">
              <am-tab-label>
                <span class="icon is-small">
                    <i class="fas fa-film" aria-hidden="true"></i>
                </span> <span>Videos</span>
              </am-tab-label>
              <h3><i class="fas fa-film" aria-hidden="true"></i> tab content with Videos</h3>
          </am-tab>
      </am-tabs-group>
  `,
})
class TabsTestComponent {
  position: TabsPositionType | undefined;
  size: TabsSizeType | undefined;
  viewType: TabsViewType | undefined;
  rounded = false;
}
