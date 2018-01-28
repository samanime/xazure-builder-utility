import { privateJsMatcher, createPrivateJsBuilder } from 'xazure-builder-common';

const source = 'src';
const dest = 'dist';

export default {
  source,
  dest,
  builders: [
    { name: 'js', matcher: privateJsMatcher, builder: createPrivateJsBuilder(source, dest) }
  ]
};