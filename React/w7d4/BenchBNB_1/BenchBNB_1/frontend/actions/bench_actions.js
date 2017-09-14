import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const fetchBenches = (data) => dispatch => {
  APIUtil.fetchBenches(data).then(
    res => dispatch(receiveBenches(res))
  )
};

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});
