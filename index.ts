import 'expo-router/entry';
import 'react-native-url-polyfill/auto';

import { setupServer } from 'msw/native'
import { rest } from 'msw'

const server = setupServer(
    rest.get('http://localhost:5000/book/:bookId', (req, res, ctx) => {
        return res(
          ctx.json({
            title: 'Lord of the Rings',
            author: 'J. R. R. Tolkien',
          }),
        )
      })
);

server.listen({
    onUnhandledRequest: 'bypass'
});