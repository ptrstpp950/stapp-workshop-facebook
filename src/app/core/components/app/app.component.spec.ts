import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

describe('AppComponent', () => {
  let fixture = null;
  let component = null;
  let $component = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        MenuComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    $component = fixture.debugElement.nativeElement;
  }));
  afterEach(() => {
    $component.remove();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'stapp-workshop-facebook'`, () => {
    expect(component.title).toEqual('stapp-workshop-facebook');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect($component.querySelector('h1').textContent)
      .toContain('Stapp-up');
  });
});
