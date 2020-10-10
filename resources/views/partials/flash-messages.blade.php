<script>
    @if (Session::has('success'))
    toastr.success("{{ Session::get('success')  }}");

    @elseif (session()->has('status'))
    toastr.success("{{ session()->get('status') }}");

    @elseif (session()->has('info'))
    toastr.info("{{ session()->get('info') }}");

    @elseif (Session::has('error'))
    toastr.error("{{ Session::get('error') }}");
    @endif
</script>