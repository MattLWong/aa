import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
})

export const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench
})

export const createREview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
)

export const fetchBenches = (filters) => dispatch => {
  APIUtil.fetchBenches(filters)
    .then(res => dispatch(receiveBenches(res)))
};

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(bench => (
    dispatch(receiveBench(bench))
  ))
)

export const createBench = bench => dispatch => (
  APIUtil.createBench(bench).then(bench => (
    dispatch(receiveBench(bench))
  ))
)
