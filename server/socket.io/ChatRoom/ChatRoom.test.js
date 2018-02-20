import assert from 'assert';

import { ChatRoom } from './ChatRoom';
import io from 'socket.io';
import express from 'express';

describe('ChatRoom Class', () => {

	/*const app = express();
	const server = app.listen(process.env.PORT || 3000);
	const socket = io(server);*/

	const mockSocket = {
		of: () => {
			let listeners = [];

			return {
				getListeners : () => listeners,
				constructor: {
					name: 'Namespace',
				},
				on: (name) => { listeners.push(name)},
			}
		},
	}


	describe('#constructor()', () => {
		it('should return a ChatRoom', () => {
			const chatRoom = new ChatRoom(mockSocket, '');

			assert(chatRoom instanceof ChatRoom);
		})

		it('should throw an error if there are no arguments', () => {
			let testPassed = false;

			try {
				const chatRoom = new ChatRoom();
			} catch (e) {
				testPassed = true;
			}

			assert(testPassed);
		})

		it('should set a getter method for the name of the ChatRoom', () => {
			const testName = 'testName';
			const chatRoom = new ChatRoom(mockSocket, testName);

			assert(chatRoom.getName() == testName);
		})

		it('should set a getter method for the socket', () => {
			const testName = 'testName';
			const chatRoom = new ChatRoom(mockSocket, testName);

			assert(chatRoom.getNamespace().constructor.name == 'Namespace');
		})

		it('should add listeners to the socket', () => {
			const testName = 'testName';
			const chatRoom = new ChatRoom(mockSocket, testName);

			assert(chatRoom.getNamespace().getListeners().length > 0);
		})
	})

})