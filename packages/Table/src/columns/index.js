import DataColumn from './DataColumn'
import SerialColumn from './SerialColumn'
import FormulaColumn from './FormulaColumn'
import TemplateColumn from './TemplateColumn'
import CheckboxColumn from './CheckboxColumn'


const ColumnClasses = {
  data: DataColumn,
  serial: SerialColumn,
  formula: FormulaColumn,
  template: TemplateColumn,
  checkbox: CheckboxColumn,
}


export default ColumnClasses
