import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CadastroProdutosComponent } from './cadastro-produtos.component';

describe('CadastroProdutosComponent', () => {
  let component: CadastroProdutosComponent;
  let fixture: ComponentFixture<CadastroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should cadastro produtos', () => {
    const listNames = fixture.debugElement.queryAll(By.css('#people-list li'));
  expect(listNames[0].nativeElement.textContent.trim()).toEqual('Luke Skywalker');
  expect(listNames[1].nativeElement.textContent.trim()).toEqual('Darth Vader');
  expect(listNames[2].nativeElement.textContent.trim()).toEqual('Leia Organa');
    expect(component).toBeTruthy();
  });

  it('should field descricao have size >= 5', () => {
    component.descricao = "peixe"
    expect(component.descricao.length).toBeGreaterThanOrEqual(5);
  });
});
