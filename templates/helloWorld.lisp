
;;;Racket-NexssProgrammer2.0
;;;DefaultTemplate

(define 
    (author) "Marcin Polak mapoart@gmail.com")

(require json)
(define NexssStdin null)

(let 
    ([contents 
        (read-line)]) 
    (if 
        (string=? contents "") 
        (read-line) 
        (let 
            () 
            (set! NexssStdin 
                (string->jsexpr contents))
;;;            (hash-ref NexssStdin `cwd) 
;;;            (define NexssStdout 
                (hash-set NexssStdin 'test "test"))
            (define NexssStdout 
                (hash-set NexssStdin 'OutputFromRacket 
                    (version)))
            (write-json NexssStdout)
))
