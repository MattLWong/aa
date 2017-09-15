import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

export const fetchBenches = (data) => dispatch => {
  APIUtil.fetchBenches(data).then(
    res => dispatch(receiveBenches(res))
  )
};

export const createBench = data => dispatch => {
  APIUtil.createBench(data).then(
    res => dispatch(receiveBench(res))
  )
};

export const fetchBench = id => dispatch => {
  APIUtil.fetchBench(id).then(
    res => dispatch(receiveBench(res))
  )
};

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
})
