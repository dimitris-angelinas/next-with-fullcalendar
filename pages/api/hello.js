import adminify from "../../functions/jsonapi/adminify";
import fetcher from "../../functions/jsonapi/fetcher";
import getLoginData from "../../functions/jsonapi/user/getLoginData";
import getTokens from "../../functions/jsonapi/user/getTokens";
import refreshTokens from "../../functions/jsonapi/user/refreshTokens";

export default async function handler(req, res) {

  // let users = await adminify((token) =>  fetcher('http://bookwd.gr/jsonapi/user/user', {token}))

  // let user = await getLoginData('eleniaaa', 'mountainbike1')

  let clientId = '4c27aebe-0f79-4fb4-8e00-aec52e6e7a66'
  let clientSecret = 'prev'

  let tokens = await getTokens('next', '1234', clientId, clientSecret)

  // let rt = `def502003c613284cd43f89c797b29dd1990a94a54d74bb83c9a580190c39ba9ec6faf57621cc86a52be8547967f076fb6c2f390739bfc0280c534c5f6933d0cbb1f20443b10720d7ad0ffcf03849bd3704bdb3bde08e43cf36cd5349040fca9055429d0d5f531bae74e65ceb4bacc127ddf9a417788e158f1984f183093476ed5598e3c17eafd26751e0bbed14c84166ef944360781235f1ca1dd3b10cf3ecdffad5bcac381829f827d9a9c656e3c91995193a94f133a61b48eb66dc444cfb0e1061cd5cf27ea3bcf743e956dab9e142638edd76a79ff37c4ba43e08c6a7657375233aba3c6ced3336197c93e58ff326d83d4ac49a4484b1a79170babb875b93ea1cb5bd04c91cd50aec59d855855b46daa8e94fe4027eb2a317bf6c41b1962822ce1a7874cfb3633e4ef6c4749c0d0fe5cf2d606ddd0044ef2de41eb0d43996374d4d6ca08593160c40dc06b37c0ebe43ef93053008a8cee60ccd31f0064c9bd971eb91525f49031f1f8cb14fd824675ea201ce2fcc6eabc9e4d2a779b4b80f4de96719c214adaed0aa28e470ba8d3107ca14e5ece5fea217a3167`
  // let newTokens = await refreshTokens(rt, clientId, clientSecret)

  res.status(200).json({ data: tokens})
}
