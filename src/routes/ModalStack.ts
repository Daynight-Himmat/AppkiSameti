import {MODALS} from '../constants/routeConstant';
import {createModalStack, ModalStackConfig} from 'react-native-modalfy';
import ConfirmationModal from '../components/modals/confirmation/Confirmation';
import NetworkWarningModal from '../components/modals/networkWarning/NetworkWarning';

const modalConfig: ModalStackConfig = {
  [MODALS.network]: {
    modal: NetworkWarningModal,
    backBehavior: 'none',
  },
  [MODALS.confirmation]: {
    modal: ConfirmationModal,
    backBehavior: 'none',
  },
};
const defaultOptions = {backdropOpacity: 0.6};

export default createModalStack(modalConfig, defaultOptions);
