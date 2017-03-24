/**
 * Created by tiagobarros on 21/03/17.
 */
class MeetingsListController {
    constructor(MeetingsTable) {
        this.meetings = MeetingsTable.$search();
    }

    $onInit(){
        this.meetings.$refresh();
    }

    getMeetingsList() {
        // this.meetings.$load('client');
    }

    addMeeting() {
    }

}

angular
    .module('app')
    .component('meetingsList', {
        templateUrl: 'app/components/meetings/meetingsList/meetingsList.html',
        controller: MeetingsListController,
        bindings: {
        }
    });


