import React from 'react';
import { Image } from 'react-native';
import type { V2TimMessage } from 'react-native-tim-js';

export const MessageAvatar = ({ message }: { message: V2TimMessage }) => {
  return (
    <Image
      style={{ width: 40, height: 40, borderRadius: 5 }}
      source={{
        uri: message.faceUrl,
      }}

    />
  );
};
