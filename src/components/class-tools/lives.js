import {useState} from 'react';
import { HeartIcon } from '@heroicons/react/solid';

export default function Lives(props) {

    return (
      <div>
          <div class="grid grid-cols-5 gap-4 p-64">
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
            <div><HeartIcon /></div>
          </div>
      </div>
    );
  }