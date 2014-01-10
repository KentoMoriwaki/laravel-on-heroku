@extends('layouts.master')

@section('content')
<div class="container">

    <h1><small>Login</small></h1>
    {{ Form::open() }}
    <div class="form-group">
        <label for="input-email">email</label>
        {{ Form::email('email', null, ['class' => 'form-control', 'id' => 'input-email']) }}
    </div>
    <div class="form-group">
        <label for="input-password">password</label>
        {{ Form::password('password', ['class' => 'form-control', 'id' => 'input-email']) }}
    </div>
    <button class="btn btn-primary btn-block" type="submit">Login</button>
    {{ Form::close() }}

</div>
@stop