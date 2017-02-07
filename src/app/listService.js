import {Injectable} from '/angular2/core';

@injectable()
export class ListService{
        getList() {
            if ($localStorage.list === undefined){
                this.list = {};
            }

            else {
                // pull from local storage
                this.list = $localStorage.list;
            }
            return this.list;
        };

        saveList(list) {
            // Save to local storage
            this.list = $localStorage.list = list;

        };

