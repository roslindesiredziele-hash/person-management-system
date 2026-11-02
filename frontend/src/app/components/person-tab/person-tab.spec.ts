import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonTab } from './person-tab';

describe('PersonTab', () => {
  let component: PersonTab;
  let fixture: ComponentFixture<PersonTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonTab],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
