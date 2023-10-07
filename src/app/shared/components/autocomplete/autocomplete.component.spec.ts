import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteAsyncComponent } from './autocomplete.component';

describe('AutocompleteApiComponent', () => {
  let component: AutocompleteAsyncComponent;
  let fixture: ComponentFixture<AutocompleteAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteAsyncComponent]
    });
    fixture = TestBed.createComponent(AutocompleteAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
