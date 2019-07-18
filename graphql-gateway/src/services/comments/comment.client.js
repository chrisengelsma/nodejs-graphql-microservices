import path from 'path'

import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

const PROTO_PATH = path.resolve(__dirname, '../_proto/comment.proto')

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const CommentServiceClient = grpc.loadPackageDefinition(packageDefinition).comment.CommentService

export default CommentServiceClient
