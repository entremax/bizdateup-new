import type * as CSS from 'csstype'
import type { ModalFuncProps } from 'antd/lib/modal'

export const DefaultCenteredContentStyle = {}
export const DefaultCenteredModalStyle: CSS.Properties = {
  padding: 0,
}
export const DefaultCenteredCustomProps: ModalFuncProps = {
  footer: null,
  closeIcon: null,
  centered: true,
  // title:<div className={"text-xl"}>
  //   Hey
  //   </div>
}

export const InvestContentStyle = {
  body: {},
  content: {},
  header: {},
}
export const InvestModalStyle: CSS.Properties = {}
export const InvestModalCustomProps: ModalFuncProps = {
  footer: null,
  closeIcon: null,
}

export const RiskDisclosureContentStyle = {}
export const RiskDisclosureModalStyle: CSS.Properties = {}
export const RiskDisclosureCustomProps: ModalFuncProps = {
  centered: true,
}
