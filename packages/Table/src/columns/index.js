import DataColumn from './DataColumn'
import SerialColumn from './SerialColumn'
import FormulaColumn from './FormulaColumn'
import TemplateColumn from './TemplateColumn'
import CheckboxColumn from './CheckboxColumn'
import EnumColumn from './EnumColumn'

const ColumnClasses = {
  data: DataColumn,
  serial: SerialColumn,
  formula: FormulaColumn,
  template: TemplateColumn,
  checkbox: CheckboxColumn,
  enum: EnumColumn,
}

export default ColumnClasses
