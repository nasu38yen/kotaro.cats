import Vue from 'vue'
import moment from 'moment'
 
Vue.filter('format-date', function (value) {
    if (!value)
        return '';
    const date = moment(value);
    return date.format("YYYY-MM-DD HH:mm");
})