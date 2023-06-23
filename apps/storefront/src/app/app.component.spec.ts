import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('renders without errors', () => {
    expect(component).toBeTruthy();
  });

  it('renders children components without errors', () => {
    const children = fixture.debugElement.children.map(({name}) => name);
    expect(children).toStrictEqual(['app-preloader', 'app-navbar', 'router-outlet', 'app-footer']);
  });
});
