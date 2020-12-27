npx pbjs -t static-module -w commonjs -o src/client/proto/proto.js  ecust_im_idl/ecust_im.proto --force-long
npx pbts -o src/client/proto/proto.d.ts src/client/proto/proto.js
