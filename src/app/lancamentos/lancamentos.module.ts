import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';




@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    SelectButtonModule,
    FormsModule
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
