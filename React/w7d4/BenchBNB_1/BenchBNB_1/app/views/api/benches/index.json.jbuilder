# this is a SINGLE object, with keys as bench.id

@benches.each do |bench|
  json.set! bench.id do
    json.partial! 'bench', bench: bench
  end
end
