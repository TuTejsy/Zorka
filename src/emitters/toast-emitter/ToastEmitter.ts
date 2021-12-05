import { EventSubscription } from 'react-native';
import { EventEmitter } from 'events';

type EVENT_TYPES = 'SHOW_TOAST';

class ToastEmitter {
    private subscriptionsMap: {[id: string]: EventEmitter} = {};
    private eventEmiter: EventEmitter;

    constructor() {
        this.eventEmiter = new EventEmitter();
    }

    public subscribeOnToastShow(componentId: string, callback: (props: ToastPropTypes) => void) {
        const subscription = this.eventEmiter.addListener('SHOW_TOAST', callback);
        this.subscriptionsMap[componentId] = subscription;
    }

    public showToast(props: ToastPropTypes) {
        this.eventEmiter.emit('SHOW_TOAST', props);
    }

    public cancellAllSubscriptions(componentId: string) {
        const subscription = this.subscriptionsMap[componentId];

        subscription?.removeAllListeners();
    }
}

export default ToastEmitter;
