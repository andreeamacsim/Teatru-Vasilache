import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize newsList with 3 items', () => {
    expect(component.newsList.length).toBe(3);
    expect(component.newsList[0].title).toBe('Spectacol Nou pentru Copii');
    expect(component.newsList[1].description).toContain('Gala Teatrului');
    expect(component.newsList[2].link).toBe('https://www.facebook.com/Teatrul.Vasilache.Botosani/posts/pfbid02vxYewurUZb2iYjEDo4TVXSExiAqLGNHtbbhBPF8akJ9LnfJGNXxKEWq1Gwwf4dkVl?locale=ro_RO');
  });
});
