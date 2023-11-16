import type * as CSS from 'csstype'
import type { ModalFuncProps } from 'antd/lib/modal'

export const DefaultCenteredContentStyle = {
  body: {
    padding: 'auto',
  },
  content: {
    height: '100%',
  },
}
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
  body: {
    padding: 0,
    margin: 0,
    height: 'calc(100% - 7rem)',
  },
  content: {
    height: '100%',
    padding: 0,
    borderRadius: 0,
  },
  header: {
    padding: 0,
    margin: 0,
  },
}
export const InvestModalStyle: CSS.Properties = {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  margin: 0,
  padding: 0,
  height: 'calc(100%)',
}
export const InvestModalCustomProps: ModalFuncProps = {
  footer: null,
  closeIcon: null,
  width: '40%',
  // title:<div className={"text-xl"}>
  //   Hey
  //   </div>
}

export const RiskDisclosureContentStyle = {}
export const RiskDisclosureModalStyle: CSS.Properties = {}
export const RiskDisclosureCustomProps: ModalFuncProps = {}
