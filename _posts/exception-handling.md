---
title: 'Exception Handling'
excerpt: 'Concepts regarding exception handling in Java'
date: '2023-11-04'
coverImage: '/assets/blog/hello-world/cover.jpg'
---
---
## Exception Handling

### What is an exception in Java?

Exception is abnormal behaviour that occurs at time of execution of an application which could get terminated if not handled properly.

### What is exception handling in Java and what are the advantages of exception handling?

Exception handling is techniques provided by Java to avoid termination of application and maintain normal execution flow.

### How are exceptions handled in Java?

**try-catch block**
    - Section where code is normally executed and monitored for any possible executions

**finally block**
    - If any exception is thrown or not, it will get executed.
    - It will not execute if `System.exit(0)` is present in either try or catch block

### try-with-resources

If code ran properly or not, we want to close the resources. 
We can use like below.

```java
try (Scanner sc = new Scanner(System.in)) {
    return Integer.parseInt(sc.nextLine());
} catch (Exception e) {
    log.info("Exception Handled");
}
```

### What is exception propagation in Java?

If an exception happens and it is not handled in the method where it was called, it goes down the call stack of preceding method and if it's still not caught, it propagates down to main method. If it's not handled in main method, program gets terminated.

### What are the important methods defined in Java’s Exception Class?

**String getMessage()** - Returns the throwable message of type string

**synchronized Throwable getCause()** - Returns exception case if present else null

**String toString()** - Returns throwable information in string format

**void printStackTrace()** - Prints stack trace data to standard error stream. Default - Console, overloaded - `PrintWriter` or `PrintStream`

### What are runtime exceptions in Java?

Exceptions that are not detected during compile time. They occur during execution of program.

They are also called `unchecked exceptions`.

All subclasses of `java.lang.RunTimeException` class and `java.lang.Error` class belongs to runtime exceptions.

### What is the difference between the throw and throws keywords in Java?

**throw** - It can be used by programmer to throw exception object to interrup normal program flow.
**throws** - It is used along with method signature to specify exceptions that method could throw during exception.

### How do you handle checked exceptions?

It can be handled using try-catch block or by using throws clauses in method declaration.
If not handled properly, then program would not compile.

### Differentiate between Checked Exception and Unchecked Exceptions in Java.
### Can you catch and handle Multiple Exceptions in Java?
### What is a stack trace and how is it related to an Exception?
### What is Exception Chaining?
### Can we have statements between try, catch and finally blocks?
### How are the keywords final, finally and finalize different from each other?
### What is the output of this below program?
### What is the difference between ClassNotFoundException and NoClassDefFoundError?
### What do you understand by an unreachable catch block error?

### Explain Java Exception Hierarchy.
### What does JVM do when an exception occurs in a program?
### What happens when an exception is thrown by the main method?
### Is it possible to throw checked exceptions from a static block?
### What happens to the exception object after exception handling is complete?
### What are different scenarios where “Exception in thread main” types of error could occur?
### Under what circumstances should we subclass an Exception?
### What happens when you run the below program?
### Does the finally block always get executed in the Java program?
### Why it is always recommended to keep the clean-up activities like closing the I/O resources or DB connections inside a finally block?
### Are we allowed to use only try blocks without a catch and finally blocks?
### What happens when the below program is run?
### Is it possible to throw an Exception inside a Lambda Expression’s body?
### What are the rules we should follow when overriding a method throwing an Exception?
### What are some of the best practices to be followed while dealing with Java Exception Handling?